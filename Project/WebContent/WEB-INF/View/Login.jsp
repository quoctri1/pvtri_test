<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>

	<link rel="stylesheet"
		href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="css/index.css">
	<script
		src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script
		src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	
</head>
<body>
	<!-- Navigation  -->
	<nav class="navbar navbar-inverse">
		<div class="container-fluid">
			<div class="navbar-header">
				<a class="navbar-brand" onClick= clickTrangchu() href="#">The Restaurant</a>
			</div>
			<ul class="nav navbar-nav">
				<li><a href="#">Trang chu</a></li>
				<li><a href="menu.html">Thuc don</a></li>
				<li><a href="#">Dat ban</a></li>
			</ul>
			<ul class="nav navbar-nav navbar-right">
				<li>
					<p class="lienhe glyphicon glyphicon-earphone"> 1800-456364</p>
				</li>	
				<li data-toggle="modal" data-target="#myModal1"><a href="#"><span
						class="glyphicon glyphicon-log-in"></span>Login</a></li>
				
			</ul>
		</div>
	</nav>
	
	<!-- Modal -->
	<div class="modal fade" id="myModal1" tabindex='-1' role="dialog">
		<div class="modal-dialog">
			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">Login</h4>
				</div>
				<div class="modal-body">
					<form action="Login" method="post">
						<%-- <h3<%= request.getAttribute("login") != null ? request.getAttribute("login"):" "%>></h3> --%>
						User Name:<input name="username" class="form-control" placeholder="Enter email" autofocus>
						Password:<input name="password" type="password" class="form-control" placeholder="Password">
						<input type="submit" class="btn btn-default" value="Ok">
						<a type="button" class="btn btn-default" data-dismiss="modal">Cancel</a>
					</form>
				</div>
			</div>
		</div>
	</div>
	
</body>
</html>