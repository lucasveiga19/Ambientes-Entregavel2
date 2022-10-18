<jsp:useBean id="prim" class="Classes.PrimJava" type="Classes.PrimJava" scope="page" />

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="ISO-8859-1">
	<title>N�mero Primo</title>
	<style><%@include file="css/Layout.css"%></style>
	<style><%@include file="css/StylePageV1.css"%></style>
	<style><%@include file="css/StylePageV2.css"%></style>
</head>
<body>
	<div class="mainLayout">
		<header class="headerLayout">
		<h1 class="titleLayout">N�mero Primo</h1>
		<p class="subtitleLayout">Desafio para verificar se o n�mero � primo</p>
		</header>
	
	<section class="mainStyle">
		<h1 class="titleStyle">Digite o n�mero que deseja verificar</h1>
		<div class="inputContainer">
			<form method="post" action="prim.jsp">
				<input class="inputStyle" type="number" min="0" id="valor" name="valor" />
				<br> <br>
				<input class="button2" type="submit" value="Verificar" />
			</form>
		</div>
		<h1 class="result">
		<% if(request.getParameter("valor") != null){%>
			<%= prim.calcula(request.getParameter("valor")) %>
		<%} %>
		</h1>
	</section>
	</div>
</body>
</html>