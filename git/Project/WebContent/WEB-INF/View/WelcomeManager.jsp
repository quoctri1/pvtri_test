<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
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
				<li>
					<div class="dropdown">
						<li data-toggle="dropdown"><a href="#"><span
						class="glyphicon glyphicon-log-in"></span> <%= session.getAttribute("login")%></a></li>
						<ul class="dropdown-menu">
							<li>
								<form action="NhaHangFoward" method="post">
									<input type="submit" class="btn btn-default" value="Nha Hang">
								</form>
							</li>
							<li>
								<form action="NhanVienFoward" method="post">
									<input type="submit" class="btn btn-default" value="Nhan Vien">
								</form>
							</li>
							<li>
								<form action="LichFoward" method="post">
									<input type="submit" class="btn btn-default" value="Lich">
								</form>
							</li>
							<li>
								<form action="ThongKeFoward" method="post">
									<input type="submit" class="btn btn-default" value="ThongKe">
								</form>
							</li>
							<li class="divider"></li>
							<li>
								<form action="LoginOut" method="post">
									<input type="submit" class="btn btn-default" value="Log Out">
								</form>
							</li>
						</ul>
					</div>
				</li>
			</ul>
		</div>
	</nav>
</body>
</html>