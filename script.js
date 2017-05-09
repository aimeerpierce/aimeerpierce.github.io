    var swap_img = function () {
        var $this = $(this);
        var newSource = $this.data('alt-src');
        $this.data('alt-src', $this.attr('src'));
        $this.attr('src', newSource);
    }

$('document').ready(function(){
	$("a").hover(function(){
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
