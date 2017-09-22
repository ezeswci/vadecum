function initPage (t) {
	$('div.app-nav', t).off('click').on('click', function () {
		$("#navpanel", t).panel("toggle");
	});
	$('img.app-logo').off('click').on('click', function () {
		$.mobile.changePage('index.php');
	});
	$('img.app-go-top').off('click').on('click', function () {
		$("html, body").animate({ scrollTop: 0 }, 750);
	});
}

function init () {
	$(window).on('pagebeforeshow', function (e) {
		initPage($(e.target));
	}).on('scroll', function (e) {
		if ($(this).scrollTop() > 90) $('img.app-go-top').fadeIn();
		else $('img.app-go-top').fadeOut();
	});
	initPage($('div[data-role=page]'));
}

$(init);
/* http://stackoverflow.com/questions/19398154/how-to-fix-truncated-text-on-select-element-on-ios7
Arregla los selects en ios 7
 */

setTimeout(function(){ 
	// if (navigator.userAgent.match(/(iPad|iPhone|iPod touch);.*CPU.*OS 7_\d/i)) {
		var selects = document.querySelectorAll("select");
		for (var i = 0; i < selects.length; i++ ){
			selects[i].appendChild(document.createElement("optgroup"));
		}
	//}
}, 1000);