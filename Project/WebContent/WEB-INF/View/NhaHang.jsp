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
	<link rel="stylesheet" type="text/css" href="css/trangthai.css">
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
	
	
	<div class="container">
		<h2>Trang thai:</h2>
		<div class="row">
			<div class="col-sm-3">
				<h3>Chu thich: </h3>
			</div>
			<div class="col-sm-3">
				<h3>Ban trong</h3>
				<div class="bantrong"></div>
			</div>
			<div class="col-sm-3">
				<h3>Ban da dat</h3>
				<div class="bandat"></div>
			</div>
			<div class="col-sm-3">
				<h3>Ban dang su dung</h3>
				<div class="bandung"></div>
			</div>
		</div>
	</div>
	
	
	
	
	<div class="container">
		<div class="row">
			<div class="col-sm-6">
				<form>
					<input type="submit" class="btn btn-default" value="Ban 1">
				</form>
				<form>
					<input type="submit" class="btn btn-default" value="Ban 2">
				</form>
				<form>
					<input type="submit" class="btn btn-default" value="Ban 3">
				</form>
				
				<form>
					<input type="submit" class="btn btn-default" value="Ban 4">
				</form>
				<form>
					<input type="submit" class="btn btn-default" value="Ban 5">
				</form>
				
				<form>
					<input type="submit" class="btn btn-default" value="Ban 6">
				</form>
				
				<form>
					<input type="submit" class="btn btn-default" value="Ban 7">
				</form>
				
				<form>
					<input type="submit" class="btn btn-default" value="Ban 8">
				</form>
				
				<form>
					<input type="submit" class="btn btn-default" value="Ban 9">
				</form>
				
				<form>
					<input type="submit" class="btn btn-default" value="Ban 10">
				</form>
			</div>
			<div class="col-sm-6">				
				<h2>Danh sach mon: </h2>
				<div class="table1">
					<table class="table">
						<thead>
							<tr>
								<th>STT</th>
								<th>Ten mon</th>
								<th>So luong</th>
								<th>Don gia</th>
								<th>Thanh tien</th>
							</tr>
						</thead>
						<tbody>
							
						</tbody>
					</table>
				</div>
				<button class="tinhtien btn btn-default">Tinh tien</button>
			</div>
		</div>
	</div>
	
</body>
</html>