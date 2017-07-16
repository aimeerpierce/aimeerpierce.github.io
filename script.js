var swap_img = function () {
    var $this = $(this);
    var newSource = $this.data('alt-src');
    $this.data('alt-src', $this.attr('src'));
    $this.attr('src', newSource);
}

particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

$('document').ready(function(){
	$("a").hover(function(){
		$(this).css("color","#878787");
	}, function() {
		$(this).css("color","#5f5f5f");
	});
	$("li").hover(function(){
		$(this).css("color","#878787");
	}, function() {
		$(this).css("color","#5f5f5f");
	});

	$(function () {
    	$('img.github').hover(swap_img, swap_img);
	});
	$(function () {
    	$('img.email').hover(swap_img, swap_img);
	});
	$(function () {
    	$('img.facebook').hover(swap_img, swap_img);
	});
	$(function () {
    	$('img.linkedin').hover(swap_img, swap_img);
	});
	$(function () {
    	$('img.note').hover(swap_img, swap_img);
	});
});

function toggle_aboutme() {
	var aboutme = document.getElementById('aboutme');
	var exp = document.getElementById('experience');
	var working = document.getElementById('working');
	var passions = document.getElementById('passions');
	var val = window.getComputedStyle(aboutme).getPropertyValue("display");
	if (val == 'none') {
	    aboutme.style.display = 'block';
	    exp.style.display = 'none';
	    working.style.display = 'none';
	    passions.style.display = 'none';
	}
}

function toggle_exp() {
	var aboutme = document.getElementById('aboutme');
	var exp = document.getElementById('experience');
	var working = document.getElementById('working');
	var passions = document.getElementById('passions');
	var val = window.getComputedStyle(exp).getPropertyValue("display");
	if (val == 'none') {
	    exp.style.display = 'block';
	    aboutme.style.display = 'none';
	    working.style.display = 'none';
	    passions.style.display = 'none';

	}
}

function toggle_working() {
	var aboutme = document.getElementById('aboutme');
	var exp = document.getElementById('experience');
	var working = document.getElementById('working');
	var passions = document.getElementById('passions');

	var val = window.getComputedStyle(working).getPropertyValue("display");
	if (val == 'none') {
	    working.style.display = 'block';
	    exp.style.display = 'none';
	    aboutme.style.display = 'none';
	    passions.style.display = 'none';

	}
}
function toggle_passions() {
	var aboutme = document.getElementById('aboutme');
	var exp = document.getElementById('experience');
	var working = document.getElementById('working');
	var passions = document.getElementById('passions');

	var val = window.getComputedStyle(passions).getPropertyValue("display");
	if (val == 'none') {
	    passions.style.display = 'block';
	    exp.style.display = 'none';
	    aboutme.style.display = 'none';
	    working.style.display = 'none';

	}
}

function open_resume(){
	var win = window.open("https://docs.google.com/document/d/1reeo9TBD21p95SuCOOm6MY8fHtc-pHFRyrjBPd01jtg/pub", '_blank');
	win.focus();
}

