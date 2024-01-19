document.addEventListener('DOMContentLoaded', function () {
  (function(){
    const sumaryCareer = document.getElementById('sumary-career');
    const sectionBoxB = document.getElementById('section-box-b-career');
    const arrowDown = document.getElementById('arrow-down-career');
    const arrowUp = document.getElementById('arrow-up-career');
    sectionBoxB.addEventListener('click', () => {
  	if (sumaryCareer.style.display === "none"){
  	  sumaryCareer.style.display = "block";
  	  arrowUp.style.opacity = "1";
  	  arrowDown.style.opacity = "0";
  	} else {
  	  sumaryCareer.style.display = "none";
  	  arrowUp.style.opacity = "0";
  	  arrowDown.style.opacity = "1";
  	}
    });
  })();
});

document.addEventListener('DOMContentLoaded', function () {
  (function(){
    const sumaryCareer = document.getElementById('sumary-experiences');
    const sectionBoxB = document.getElementById('section-box-b-experiences');
    const arrowDown = document.getElementById('arrow-down-experiences');
    const arrowUp = document.getElementById('arrow-up-experiences');
    sectionBoxB.addEventListener('click', () => {
  	if (sumaryCareer.style.display === "none"){
  	  sumaryCareer.style.display = "block";
  	  arrowUp.style.opacity = "1";
  	  arrowDown.style.opacity = "0";
  	} else {
  	  sumaryCareer.style.display = "none";
  	  arrowUp.style.opacity = "0";
  	  arrowDown.style.opacity = "1";
  	}
    });
  })();
});

document.addEventListener('DOMContentLoaded', function () {
  (function(){
    const sumaryCareer = document.getElementById('sumary-certifications');
    const sectionBoxB = document.getElementById('section-box-b-certifications');
    const arrowDown = document.getElementById('arrow-down-certifications');
    const arrowUp = document.getElementById('arrow-up-certifications');
    sectionBoxB.addEventListener('click', () => {
  	if (sumaryCareer.style.display === "none"){
  	  sumaryCareer.style.display = "block";
  	  arrowUp.style.opacity = "1";
  	  arrowDown.style.opacity = "0";
  	} else {
  	  sumaryCareer.style.display = "none";
  	  arrowUp.style.opacity = "0";
  	  arrowDown.style.opacity = "1";
  	}
    });
  })();
});

jQuery(document).ready(function($) {

    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
   
    

});

function getScrollPos(){
	var supportPageOffset = window.pageXOffset !== undefined;
	var isCSS1Compat = ( (document.compatMode || "") === "CSS1Compat" )


	var x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
	var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;

	return { x: x, y: y };
}

var _scrollTimer = [];

function smoothScrollTo(y, time){
	time = time == undefined ? 500 : time;

	var scrollPos = getScrollPos();
	var count = 60;
	var length = (y - scrollPos.y);

	function easeInOut(k){
		return 0.5 * (Math.sin((k - 0.5) * Math.PI) + 1);
	}

	for(var i = _scrollTimer.length -1; i >= 0; i--){
		clearTimeout(_scrollTimer[i]);
	}

	for(var i = 0; i <= count; i++){
		(function(){
			var cur = i;
			_scrollTimer[cur] = setTimeout(function(){
				window.scrollTo(
					scrollPos.x,
					scrollPos.y + length * easeInOut(cur/count)
				);
			}, (time/count) * cur);
		})();
	}
}
