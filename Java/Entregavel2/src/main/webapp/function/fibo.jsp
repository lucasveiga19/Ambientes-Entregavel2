<jsp:useBean id="fibo" class="Classes.FiboJava" type="Classes.FiboJava" scope="page" />

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
	<title>Fibonacci</title>
	<style><%@include file="css/Layout.css"%></style>
	<style><%@include file="css/StylePageV1.css"%></style>
	<style><%@include file="css/StylePageV2.css"%></style>
</head>
<body>
<div class="mainLayout">
		<header class="headerLayout">
		<h1 class="titleLayout">Fibonacci</h1>
		<p class="subtitleLayout">Algoritmo que vai receber mostrar a fibonnacci de um número inteiro</p>
		</header>
	
	<section class="mainStyle">
		<h1 class="titleStyle">Digite um número inteiro maior que zero</h1>
		<div class="inputContainer">
			<form method="post" action="fibo.jsp">
				<input class="inputStyle" type="number" min="1" id="valor" name="valor" />
				<br> <br>
				<input class="button2" type="submit" value="Verificar" />
			</form>
		</div>
		<h1 class="result">
		<% if(request.getParameter("valor") != null){%>
			<%= fibo.calcula(request.getParameter("valor")) %>
		<%} %>
		</h1>
	</section>
	</div>
</body>
</html>