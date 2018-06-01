// JavaScript Document

$(document).ready(function(){
	$(' #sec2, #sec3,#sec4, #sec5, #sec6, #sec7, #sec8').hide(); 
	
	$("li").on( "click", function() {
		$("li").removeClass( "active" );
		$( this ).addClass( "active" );
	 });
	
	$("#btn1").on( "click", function() {
		$('#sec1').show(); 
		$('#sec2, #sec3,#sec4, #sec5, #sec6, #sec7, #sec8').hide();
	 });
	
	$("#btn2").on( "click", function() {
		$('#sec2').show(); 	
		$('#sec1, #sec3,#sec4, #sec5, #sec6, #sec7, #sec8').hide();
	 });
	
	$("#btn3").on( "click", function() {
		$('#sec3').show(); 
		$('#sec1, #sec2, #sec4, #sec5, #sec6, #sec7, #sec8').hide();
	 });
	$("#btn4").on( "click", function() {
		$('#sec4').show(); 
		$('#sec1, #sec2, #sec3, #sec5, #sec6, #sec7, #sec8').hide();
	 });
	$("#btn5").on( "click", function() {
		$('#sec5').show(); 
		$('#sec1, #sec2, #sec3, #sec4, #sec6, #sec7, #sec8').hide();
	 });
	$("#btn6").on( "click", function() {
		$('#sec6').show(); 
		$('#sec1, #sec2, #sec3, #sec4, #sec5, #sec7, #sec8').hide();
	 });
	$("#btn7").on( "click", function() {
		$('#sec7').show(); 
		$('#sec1, #sec2, #sec3, #sec4, #sec5, #sec6, #sec8').hide();
	 });
	$("#btn8").on( "click", function() {
		$('#sec8').show(); 
		$('#sec1, #sec2, #sec3, #sec4, #sec5, #sec6, #sec7').hide();
	 });
	
	
});


	