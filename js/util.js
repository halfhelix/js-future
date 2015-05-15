
;( function( W ) {
  
  W.is_empty = function( subj ) {
    return subj === undefined || subj === null;
  }
  
  W.each = function( arr, cb ) {
    for ( var i in arr ) {
      if ( arr.hasOwnProperty( i ) ) {
        ( function( ix ) {
          cb( arr[ ix ], ix );
        } )( i );
      }
    }
  }
  
  W.format = function() {
    var args = Array.prototype.slice.call(arguments),
        tmpl = args.shift(),
        reg = new RegExp( "%(\\w)", "ig" ),
        phs = tmpl.match( reg ),
        res = tmpl;
    if ( phs.length != args.length ) {
      throw "Arguments count is not the same as placeholders count.";
    }
    each( phs, function( ph, ix ) {
      var v = args[ ix ];
      switch ( ph ) {
        case "%d":
          v = parseInt( v, 10 );
          break;
        case "%f":
          v = parseFloat( v );
          break;
        case "%s":
          v = "" + v;
          break;
      }
      res = res.replace( ph, v );
    } );
    
    return res;
  }
  
} )( window );