jQuery(document).ready(function($) {
	jQuery('table.cnss-social-icon tr td img').hover(function() {
		jQuery(this).animate({
			opacity: 0.5
			//web.archive.org/web/20161021223614/http://marginTop:'-5px'
		  }, 200 );
	},
	function() {
		jQuery(this).animate({
			opacity: 1
			//web.archive.org/web/20161021223614/http://marginTop:'0px'
		  }, 200 );
	});
	
	jQuery('ul.cnss-social-icon li img').hover(function() {
		jQuery(this).animate({
			opacity: 0.5
		  }, {duration:200, queue:false} );
	},
	function() {
		jQuery(this).animate({
			opacity: 1
		  }, {duration:200, queue:false} );
	});
});

/*
     FILE ARCHIVED ON 22:36:14 Oct 21, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:34:18 Mar 31, 2017.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/