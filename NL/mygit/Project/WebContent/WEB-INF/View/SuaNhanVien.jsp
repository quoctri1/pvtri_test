<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
<%@ page import = "com.BEAN.NhanVien" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
	<link rel="stylesheet"
		href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="css/suanhanvien.css">
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
							<li><a href="#">Nha hang</a></li>
							<li><a href="#">Nhan vien</a></li>
							<li><a href="#">Lich</a></li>
							<li><a href="#">Thong ke</a></li>
							<li class="divider"></li>
							<li>
								<form action="LoginOut" method="post">
									<input type="submit" value="Log out">
								</form>
							</li>
						</ul>
					</div>
				</li>
			</ul>
		</div>
	</nav>
	
	<div class="container-fluid">
		<div class="row">
			<div class="col-sm-4">
			
			</div>
			<div class="col-sm-8">
				<%
					NhanVien nv=new NhanVien();
					nv= (NhanVien)request.getAttribute("nhanvien");
				%>
				<form action="NhanVienRepair" method="get">
					<h4>Ma Nhan Vien: </h4>
					<input type="text" name="ma" value="<%=nv.getMa_NV() %>">
					
					<h4>Ten Nhan Vien: </h4>
					<input type="text" name="ten" value="<%=nv.getTen_NV() %>">
					
					<h4>Vi tri: </h4>
					<input type="text" name="vitri" value="<%=nv.getVitri_NV() %>">
					
					<h4>SDT: </h4>
					<input type="text" name="sdt" value="<%=nv.getSdt_NV() %>">
					
					<h4>Dia Chi: </h4>
					<input type="text" name="diachi" value="<%=nv.getDiachi_NV() %>">
					
					<h4>Email: </h4>
					<input type="text" name="email" value="<%=nv.getEmail_NV() %>">
					
					<h4>Ngay bat dau: </h4>
					<input type="text" name="ngay" value="<%=nv.getNgaybatdau_NV().toString() %>">
					
					<input type="submit" value="OK">
				</form>
			</div>
		</div>
	</div>
</body>
</html>