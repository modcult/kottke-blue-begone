// ==UserScript==
// @name          kottke-blue-begone
// @namespace     http://modcult.org/userscripts
// @description   Black and White and Red All Over.
// @include       http://kottke.org/*
// @include       http://www.kottke.org/*
// ==/UserScript==


(function() {

    var elements, e_id;

    elements = [ 't','b','l','r','tl','tr','bl','br' ];

    for (i in elements) {
      var e = document.getElementById(elements[i]);
      if (e) {
        e.parentNode.removeChild(e);
      }
    };

})();
