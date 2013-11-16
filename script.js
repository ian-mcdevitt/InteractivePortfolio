$(function ()
{
	$('.novice').mouseenter(function ()
	{
		$(this).animate({width:"140px"}, 500);
	});
	$('.novice').mouseleave(function ()
	{
		$(this).animate({width:"40px"}, 500);
	});
	$('.competent').mouseenter(function ()
	{
		$(this).animate({width:"240px"}, 500);
	});
	$('.competent').mouseleave(function ()
	{
		$(this).animate({width:"40px"}, 500);
	});
	$('.proficient').mouseenter(function ()
	{
		$(this).animate({width:"340px"}, 500);
	});
	$('.proficient').mouseleave(function ()
	{
		$(this).animate({width:"40px"}, 500);
	});
	$('.expert').mouseenter(function ()
	{
		$(this).animate({width:"440px"}, 500);
	});
	$('.expert').mouseleave(function ()
	{
		$(this).animate({width:"40px"}, 500);
	});
	$('.master').mouseenter(function ()
	{
		$(this).animate({width:"540px"}, 500);
	});
	$('.master').mouseleave(function ()
	{
		$(this).animate({width:"40px"}, 500);
	});
	$('.expand_all').click(function ()
	{
		$('.novice, .competent, .proficient, .expert, .master').mouseenter();
		$('.novice, .competent, .proficient, .expert, .master').unbind();
	});
});