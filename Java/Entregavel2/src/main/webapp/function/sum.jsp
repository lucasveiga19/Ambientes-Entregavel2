<jsp:useBean id="sum" class="Classes.SumJava" type="Classes.SumJava" scope="page" />

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
	
	<title>Somatório</title>
	<style><%@include file="css/Layout.css"%></style>
	<style><%@include file="css/StylePageV2.css"%></style>
	
</head>
<body>
	<div class="mainLayout">
		<header class="headerLayout">
		<h1 class="titleLayout">Somatório</h1>
		<p class="subtitleLayout">Algoritmo que soma um conjunto de números</p>
		</header>
	
	<section class="mainStyle2">
		<h1 class="titleStyle2">Digite sua lista</h1>
		<p class="subTitle2">Separe seus numeros por espaços Ex: "5 4 2 6" que vai ser igual a "5,4,2,6"</p>
		<p class="subTitle2">Obs: Não está aceitando decimal</p>
		
		<div class="inputContainer">
			<form method="post" action="sum.jsp">
				<input class="input2" type="text" id="valor" name="valor" />
				<br> <br>
				<input class="button2" type="submit" value="Soma" />
			</form>
		</div>
		
		<h1 class="result">
		<% if(request.getParameter("valor") != null){%>
			<%= sum.calcula(request.getParameter("valor")) %>
		<%} %>
		</h1>
	</section>
	</div>
</body>
</html>