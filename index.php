<html ng-app>
	<head>
		<script type="text/javascript" src="jquery203.js"></script>
		<script type="text/javascript" src="angular.js"></script>
		<script type="text/javascript" src="script.js"></script>
		<link rel="stylesheet" type="text/css" href="stylesheet.css">
	</head>
	<body ng-controller="SimpleController">
		<a href="#" class="expand_all">Expand All</a>
		<table>
			<tr>
				<th>&nbsp;</th>
				<th><span style="width:40px; display:block;"></span></th>
				<th ng-repeat="level in skill_names">{{level}}</td>
			</tr>
			<tr ng-repeat="skill in skills | orderBy:'level':true">
				<td>{{skill.name}}</td>
				<td>
					<div class="meter">
						<span ng-class="skill_names[skill.level-1] | lowercase">
						</span>
					</div>
				</td>
				<td ng-repeat="level in skill_names">&nbsp;</td>
			</tr>
		</table>
	</body>
</html>