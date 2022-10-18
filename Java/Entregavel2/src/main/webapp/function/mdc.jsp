<jsp:useBean id="fibo" class="Classes.MdcJava" type="Classes.MdcJava" scope="page" />

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
	<title>Máximo Divisor Comum</title>
	<style><%@include file="css/Layout.css"%></style>
	<style><%@include file="css/StylePageV1.css"%></style>
	<style><%@include file="css/StylePageV2.css"%></style>
</head>
<body>
	<div class="mainLayout">
		<header class="headerLayout">
		<h1 class="titleLayout">Máximo Divisor Comum</h1>
		<p class="subtitleLayout">O algoritmo vai receber dois inteiros A e B e retornar o maior divisor entre eles</p>
		</header>
	
	<section class="mainStyle">
		<h1 class="titleStyle">Digite os numeros que deseja calcular o MDC</h1>
		<div class="inputContainer">
			<form method="post" action="mdc.jsp">
				<div class="rowInputContainer">
					<input class="inputStyle" type="number" min="1" id="valor1" name="valor1" />
					<input class="inputStyle" type="number" min="1" id="valor2" name="valor2" />
				</div>
				<br>
				<input class="button2" type="submit" value="Calcular" />
			</form>
		</div>
		<h1 class="result">
		<% if(request.getParameter("valor1") != null && request.getParameter("valor2") != null){%>
			<%= fibo.calcula(request.getParameter("valor1"), request.getParameter("valor2")) %>
		<%} %>
		</h1>
	</section>
	</div>
</body>
</html>