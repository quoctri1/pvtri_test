<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>
<%@ page import = "com.BEAN.NhanVien" %>
<%@ page import = "java.util.*" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
	<link rel="stylesheet"
		href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="css/nhanvien.css">
	<script
		src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script
		src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body id="txt1">

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
	
	<div class="container">
		<div class="form-inline" >
			<button class="btn btn-default btnst" data-toggle="modal"
				data-target="#themnhanvien">Them nhan vien</button>
			<input type="text" class="form-control input-lg" placeholder="Search">
			<button class="btn btn-info btn-lg glyphicon glyphicon-search" type="button">
			</button>
		</div>
	</div>
	
	<h3<%= request.getAttribute("canhbao") != null ? request.getAttribute("canhbao"):" "%>></h3>
	
	<div id="txt" class="table1">
		<table class="table">
			<thead>
				<tr>
					<th>STT</th>
					<th>Ho Ten</th>
					<th>Vi Tri</th>
					<th>Dien thoai</th>
					<th>Email</th>
					<th>Dia Chi</th>
					<th>Ngay bat dau</th>
					<th>Tuy chinh</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach items="${listuser}" var="list" varStatus="loop">
					
					<tr>
						<td>${list.ma_NV }</td>
						<td>${list.ten_NV }</td>
						<td>${list.vitri_NV }</td>
						<td>${list.sdt_NV }</td>
						<td>${list.email_NV }</td>
						<td>${list.diachi_NV }</td>
						<td>${list.ngaybatdau_NV }</td>
						<td>
							<input type="button" class="glyphicon glyphicon-file"  onclick="myfunction(${list.ma_NV })">
							<input class="glyphicon glyphicon-trash" id="deleteid" onclick = "deleteid(${list.ma_NV })" type="button">
						</td>
					</tr>
				</c:forEach>
			</tbody>
		</table>
	</div>
	
	
	<!-- Modal -->
	<div class="modal fade" id="themnhanvien" tabindex='-1'>
		<div class="modal-dialog">
			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">Them nhan vien</h4>
				</div>
				<div class="modal-body">
					<form name="myForm" action="NhanVienAddServlet" method = "post">
						<div class="form-group">
							<label for="exampleInputEmail1">Ma Nhan Vien</label> 
							<input name="ma" id="id" type="text" class="form-control" placeholder="Ma Nhan Vien" autofocus>
						</div>
						<div class="form-group">
							<label for="exampleInputEmail1">Ho Ten</label> 
							<input id="name1" name="name1" type="text" class="form-control" placeholder="Name" >
						</div>
						<div style="margin-bottom:10px;">
							<label for="exampleInputEmail1">Vi tri</label>
							<select id="vitri" name="vitri" class="form-control">
								<option>Quan ly</option>
								<option>Nhan vien<option>
							</select>
						</div>
						
						<div class="form-group">
							<label for="exampleInputPassword1">Dien thoai</label> <input name="sdt"
								type="text" class="form-control" id="sdt"
								placeholder="Phone">
						</div>
						
						<div class="form-group">
							<label for="exampleInputPassword1">Email</label> <input name="email"
								type="text" class="form-control" id="email"
								placeholder="Email">
						</div>
						
						<div class="form-group">
							<label for="exampleInputPassword1">Dia Chi</label> <input name="diachi"
								type="text" class="form-control" id="diachi"
								placeholder="Dia Chi">
						</div>
						
						<div class="form-group">
							<label for="exampleInputPassword1">Ngay bat dau</label> <input name="ngaybatdau"
								type="date" class="form-control" id="ngaybatdau"
								placeholder="Date">
						</div>
						<div class="modal-footer">
							<input type="submit" onclick="Display()" class="btn btn-default" value="OK">
							<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>	
	
	<script type="text/javascript">
		function Display (){
/* 			var ma  = document.getElementById("id").value;
			var name = document.getElementById("name").value;
			var email = document.getElementById("email").value;
			var sdt = document.getElementById("sdt").value;
			var diachi = document.getElementById("diachi").value;
			var vitri = document.getElementById("vitri").value;
			var ngaybatdau = document.getElementById("ngaybatdau").value; */
			var xhttp;
			var url = "NhanVienServlet";
			
			if(window.XMLHttpRequest){
				xhttp=new XMLHttpRequest();
			}else {
				xhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
			xhttp.onreadystatechange = function(){
				if(this.readyState == 4){
					document.getElementById("txt1").innerHTML = this.responseText;
				}
			}
			xhttp.open("POST",url,true);
			xhttp.send();
		}
		
		function deleteid(str){
			var r=confirm("Do you want to delete??"+str);
			if(r==true){
				var xhttp;
				var url = "NhanVienDelete?name="+str;
				
				if(window.XMLHttpRequest){
					xhttp=new XMLHttpRequest();
				}else {
					xhttp = new ActiveXObject("Microsoft.XMLHTTP");
				}
				xhttp.onreadystatechange = function(){
					if(this.readyState == 4){
						document.getElementById("txt1").innerHTML = this.responseText;
					}
				}
				xhttp.open("POST",url,true);
				xhttp.send();
			}
		}
		
		function myfunction(ma) {
			var xhttp;
			var url = "NhanVienRepair?ma="+ma;
			if(window.XMLHttpRequest){
				xhttp=new XMLHttpRequest();
			}else {
				xhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
			xhttp.onreadystatechange = function(){
				if(this.readyState == 4){
					document.getElementById("txt1").innerHTML = this.responseText;
				}
			}
			xhttp.open("POST",url,true);
			xhttp.send();
		}
		
	</script>

</body>
</html>