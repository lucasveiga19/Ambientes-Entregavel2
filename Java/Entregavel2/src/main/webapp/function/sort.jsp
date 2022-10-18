<jsp:useBean id="sort" class="Classes.SortJava" type="Classes.SortJava" scope="page" />

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
	<title>Quick Sort</title>
	<style><%@include file="css/Layout.css"%></style>
	<style><%@include file="css/StylePageV1.css"%></style>
	<style><%@include file="css/StylePageV2.css"%></style>
</head>
<body>
	<div class="mainLayout">
		<header class="headerLayout">
		<h1 class="titleLayout">Quick Sort</h1>
		<p class="subtitleLayout">O algoritmo vai ordernar uma lista passada utilizando metodo de quick sort</p>
		</header>
	
	<section class="mainStyle">
		<h1 class="titleStyle">Digite a Lista que deseja ordenar</h1>
		<p class="subTitle2">Use espaço para dividir os itens exemplo: "3 8 2.2 42" que vai ser igual a "3, 8, 2.2, 42"</p>
		<div class="inputContainer">
			<form method="post" action="sort.jsp">
				<input class="input2" type="text" id="valor" name="valor" />
				<br> <br>
				<input class="button2" type="submit" value="Ordenar" />
			</form>
		</div>
		
		<h1 class="result">
		<% if(request.getParameter("valor") != null){%>
			<%= sort.calcula(request.getParameter("valor")) %>
		<%} %>
		</h1>
	</section>
	</div>
</body>
</html>