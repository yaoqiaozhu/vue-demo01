<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>Vue入门</title>
	<script src="./vue.js"></script>
</head>

<body>
	<div id="root">{{msg}}</div>
	<script>
		new Vue({
			el: "#root",
			data: {
				msg: "hello world"
			}
		})
	</script>
</body>

</html>