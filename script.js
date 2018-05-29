var swap_img = function () {
    var $this = $(this);
    var newSource = $this.data('alt-src');
    $this.data('alt-src', $this.attr('src'));
    $this.attr('src', newSource);
}

$('document').ready(function(){

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
	//var exp = document.getElementById('experience');
	var resume = document.getElementById('resume');
	var passions = document.getElementById('passions');
	var reports = document.getElementById('reports');
	var val = window.getComputedStyle(aboutme).getPropertyValue("display");
	if (val == 'none') {
	    aboutme.style.display = 'block';
	    //exp.style.display = 'none';
	    resume.style.display = 'none';
	    passions.style.display = 'none';
	    reports.style.display = 'none';
	}
}

/*function toggle_exp() {
	var aboutme = document.getElementById('aboutme');
	//var exp = document.getElementById('experience');
	var resume = document.getElementById('resume');
	var passions = document.getElementById('passions');
	var reports = document.getElementById('reports');
	var val = window.getComputedStyle(exp).getPropertyValue("display");
	if (val == 'none') {
	    //exp.style.display = 'block';
	    aboutme.style.display = 'none';
	    resume.style.display = 'none';
	    passions.style.display = 'none';
	    reports.style.display = 'none';
	}
}*/

function toggle_resume() {
	var aboutme = document.getElementById('aboutme');
	//var exp = document.getElementById('experience');
	var resume = document.getElementById('resume');
	var passions = document.getElementById('passions');
	var reports = document.getElementById('reports');

	var val = window.getComputedStyle(resume).getPropertyValue("display");
	if (val == 'none') {
	    resume.style.display = 'block';
	    //exp.style.display = 'none';
	    aboutme.style.display = 'none';
	    passions.style.display = 'none';
	    reports.style.display = 'none';
	}
}
function toggle_passions() {
	var aboutme = document.getElementById('aboutme');
	//var exp = document.getElementById('experience');
	var resume = document.getElementById('resume');
	var passions = document.getElementById('passions');
	var reports = document.getElementById('reports');

	var val = window.getComputedStyle(passions).getPropertyValue("display");
	if (val == 'none') {
	    passions.style.display = 'block';
	    //exp.style.display = 'none';
	    aboutme.style.display = 'none';
	    resume.style.display = 'none';
	    reports.style.display = 'none';
	}
}
function toggle_reports() {
	var aboutme = document.getElementById('aboutme');
	//var exp = document.getElementById('experience');
	var resume = document.getElementById('resume');
	var passions = document.getElementById('passions');
	var reports = document.getElementById('reports');

	var val = window.getComputedStyle(reports).getPropertyValue("display");
	if (val == 'none') {
	    reports.style.display = 'block';
	    passions.style.display = 'none';
	    //exp.style.display = 'none';
	    aboutme.style.display = 'none';
	    resume.style.display = 'none';
	}
}
function open_resume(){
	var win = window.open("https://docs.google.com/document/d/1reeo9TBD21p95SuCOOm6MY8fHtc-pHFRyrjBPd01jtg/pub", '_blank');
	win.focus();
}

function expand_content(contentType){
	var plus = document.getElementsByClassName('fa fa-plus ' + contentType);
	var minus = document.getElementsByClassName('fa fa-minus ' + contentType);
	var content = document.getElementsByClassName('content ' + contentType);
	if (content[0].style.display == 'block'){
		plus[0].style.display = 'block';
		minus[0].style.display = 'none';
		content[0].style.display = 'none';
	} else {
		plus[0].style.display = 'none';
		minus[0].style.display = 'block';
		content[0].style.display = 'block';
	}

}

function retract_content(contentType){
	var plus = document.getElementsByClassName('fa fa-plus ' + contentType);
	var minus = document.getElementsByClassName('fa fa-minus ' + contentType);
	var content = document.getElementsByClassName('content ' + contentType);
	plus[0].style.display = 'block';
	minus[0].style.display = 'none';
	content[0].style.display = 'none';
}

