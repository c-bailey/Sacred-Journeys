(function(ah){

  var _win = ah.window,
      _doc = ah.document,
      _addBlockId = 'add-block',
      _addBlock = _doc.getElementById( _addBlockId ),
      _placeholderId = _addBlock.getAttribute( 'data-placeholder' ),
      _placeholder = _doc.getElementById( _placeholderId ),
      _ancestorOffsets,
      _diffLeft = _diffTop = 0;


  // trigger add hopping functionality on page load      
  _win.addEventListener('load', function() {
    // indicate js support, if not already indicated
    if ((' ' + _doc.body.className + ' ').indexOf(' js ') == -1) { _doc.body.className+=' js'; }

    // calculate offsets of positioned ancestors one time
    _ancestorOffsets = findOffset( _placeholder );
    _diffLeft = _ancestorOffsets.diffLeft;
    _diffTop = _ancestorOffsets.diffTop;

    // trigger add hopping functionality on page load
    hopAddBlock( _addBlockId );
  }, false);


  // trigger add hopping functionality on page resize
  _win.onresize = function() { hopAddBlock( _addBlockId ); };


  // Match the add block's position to the placeholder's position (if the placeholder is currently visible)
  function hopAddBlock( _addBlockId ) {

    // bail if no placeholder is found
    if (!_placeholder) { 
        _addBlock.style.position = 'static';
        return;
    }

    var curStyle = (_placeholder) ? getRenderedStyle( _placeholder, 'display' ) : null,
      pTop,
      pLeft;

    // palceholder is found and visible
    if ( curStyle != 'none' && _placeholder) {
      // get placeholder position
      pos = findPos( _placeholder, _diffLeft, _diffTop );
      pLeft = pos.left;
      pTop = pos.top;

      // move add-block there
      _addBlock.style.top = pTop + 'px';
      _addBlock.style.left = pLeft + 'px';
    }
	}

  // Return position of the given object in relation to viewport. (Adapted from http://www.quirksmode.org/js/findpos.html)
  function findPos( elt, diffLeft, diffTop ) {
    var curLeft = curTop = 0;

    // set defaults if no offsets for positioned ancestors were passed in
    diffLeft = diffLeft || 0;
    diffTop = diffTop || 0;

    // loop through ancestors of element
    if ( elt.offsetParent ) {
      do {
        curLeft += elt.offsetLeft;
        curTop += elt.offsetTop;

      } while ( elt = elt.offsetParent );
    return {'left': curLeft - diffLeft, 'top': curTop - diffTop};
    }
  }

  // Return sum of offsets of absolutely or relatively positioned ancestors to the given element
  function findOffset( elt ) {
    var curLeft = curTop = diffLeft = diffTop = 0,
      parentPositioning = '';

    if ( elt.offsetParent ) {
      do {
        parentPositioning = getRenderedStyle( elt, 'position');
        if( parentPositioning == 'absolute' || parentPositioning == 'relative') {
            diffTop += elt.offsetTop;
            diffLeft += elt.offsetLeft;
          }
      } while ( elt = elt.offsetParent );
    return {'diffLeft': diffLeft, 'diffTop': diffTop};
    }
  }

  // Return the value the given property is set to on the given element
  function getRenderedStyle( elt, prop ) {
    // modern js-friendly browsers
    if ( _doc.defaultView && _doc.defaultView.getComputedStyle ) {
      return _doc.defaultView.getComputedStyle( elt, null )[prop];
    // oldschool/IE browsers
    } else if ( elt.currentStyle ) {
      return elt.currentStyle[prop];
    }
  }

})( this );
