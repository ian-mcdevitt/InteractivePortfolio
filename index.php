<html>
	<head>
		<script type="text/javascript" src="jquery203.js"></script>
		<script type="text/javascript" src="script.js"></script>
		<link rel="stylesheet" type="text/css" href="stylesheet.css">
	</head>
	<body>
		<?php
			$languages = array
			(
				'HTML' => 'expert',
				'CSS' => 'proficient',
				'JavaScript' => 'expert',
				'jQuery' => 'proficient',
				'PHP' => 'master',
				'SQL' => 'proficient',
				'Java' => 'expert',
				'C' => 'competent',
				'C++' => 'proficient',
				'ColdFusion' => 'novice',
				'Ruby' => 'novice'
			);
		?>
		<a href="#" class="expand_all">Expand All</a>
		<table>
			<tr>
				<th>&nbsp;</th>
				<th><span style="width:40px; display:block;"></span></th>
				<th>Novice</th>
				<th>Competent</th>
				<th>Proficient</th>
				<th>Expert</th>
				<th>Master</th>
			</tr>
			<?php
				print_skills($languages);
			?>
		</table>
	</body>
</html>

<?php
	function print_skills($skills_array)
	{
		foreach($skills_array as $skill => $skill_level)
		{
			echo '<tr><td>' . $skill . '</td><td><div class="meter"><span class="' . $skill_level . '"></span></div></td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>' . "\r\n";
		}
	}

?>