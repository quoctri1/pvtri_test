<%@page import="com.sun.webkit.ContextMenu.ShowContext"%>
<%@page import="com.sun.webkit.ContextMenu.ShowContext"%>
<%@page import="javax.swing.JOptionPane"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"

    pageEncoding="ISO-8859-1"%>
<%@page import="java.sql.Connection" %>
<%@page import="java.sql.PreparedStatement" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	<title>Insert title here</title>
	</head>
	<body>
	
		<form action="Login" method="post">
			<input name="username" type="text">
			<input type="submit" value="login">
		</form>
	</body>
</html>