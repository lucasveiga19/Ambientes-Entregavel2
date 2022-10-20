<jsp:useBean id="cont" class="Classes.ContJava" type="Classes.ContJava" scope="page" />

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="ISO-8859-1">
	<title>Contagem</title>
	<style><%@include file="css/Layout.css"%></style>
	<style><%@include file="css/StylePageV1.css"%></style>
	<style><%@include file="css/StylePageV2.css"%></style>
	
</head>
<body>
	<div class="mainLayout">
		<header class="headerLayout">
		<h1 class="titleLayout">Contagem</h1>
		<p class="subtitleLayout">Algoritmo verifica uma lista de números e um valor N de corte retornando quais números passando pelo valor de corte</p>
		</header>
	
	<section class="mainStyle2">
		<h1 class="titleStyle2">Digite a Lista e o valor de corte</h1>
		<p class="subTitle2">Digite uma lista divindo os números por ESPAÇO ex: "1 5 8 10"</p>
		
		<div class="inputContainer">
			<form method="post" action="cont.jsp">
				<input class="input2" type="text" id="valor1" name="valor1" />
				<br> <br>
				<input class="inputStyle" type="number" id="valor2" name="valor2" />
				<br> <br>
				<input class="button2" type="submit" value="Verificar" />
			</form>
		</div>
		 
		<h1 class="result">
		<% if(request.getParameter("valor1") != null && request.getParameter("valor2") != null){%>
			<%= cont.calcula(request.getParameter("valor1"), request.getParameter("valor2")) %>
		<%} %>
		</h1>
	</section>
	</div>
</body>
</html>