$(function ()
{
	skills = {beginner:1, familiar:2, proficient:3, expert:4, master:5};
	$('.beginner, .familiar, .proficient, .expert, .master').mouseenter(function ()
	{
		$(this).animate({width:skills[($(this).context.className)]+"40px"});
	});
	
	$('.beginner, .familiar, .proficient, .expert, .master').mouseleave(function ()
	{
		$(this).animate({width:"40px"});
	});

	$('.expand_all').click(function ()
	{
		$('.beginner, .familiar, .proficient, .expert, .master').mouseenter();
		$('.beginner, .familiar, .proficient, .expert, .master').unbind();
	});
});

function SimpleController($scope)
{
	$scope.skills =
		[
			{name:'HTML',level:'4'},
			{name:'CSS',level:'3'},
			{name:'JavaScript',level:'4'},
			{name:'jQuery',level:'3'},
			{name:'PHP',level:'5'},
			{name:'SQL',level:'3'},
			{name:'Java',level:'4'},
			{name:'C',level:'2'},
			{name:'C++',level:'3'},
			{name:'ColdFusion',level:'1'},
			{name:'Ruby',level:'1'},
			{name:'AngularJS',level:'3'}
		];
		
	$scope.skill_names = ['Beginner', 'Familiar', 'Proficient', 'Expert', 'Master'];
}