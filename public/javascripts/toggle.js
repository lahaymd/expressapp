function toggleNav(){
	$("#site-wrapper").hasClass("show-nav") ? $("#site-wrapper").removeClass("show-nav"):$("#site-wrapper").addClass("show-nav")}
function showModal(){
	$("#openModal").addClass("target")}function removeModal(){$("#openModal").removeClass("target")}$(function(){$(".toggle-nav").on("touchstart click",function(){toggleNav()}),$(".toggle-comments").on("click",function(){$(".addCommentForm").toggle(1e3),"show comments"==$(".toggle-comments").html()?$(".toggle-comments").html("hide comments"):$(".toggle-comments").html("show comments")}),$("#modal").click(function(){showModal()}),$(".close").click(function(){removeModal()})});
	$(function() {
		$('.toggle-nav').text('open/close')
	})