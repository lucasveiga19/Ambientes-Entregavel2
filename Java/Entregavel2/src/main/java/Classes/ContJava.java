package Classes;

public class ContJava {
	public String calcula(String valor1, String valor2) {
		int b = Integer.parseInt(valor2);
		int cont = 0;
		
		valor1.trim();
		String entrada[] = valor1.split("\\s+");
		int items[] = new int[entrada.length];
		
		String resultado = "";
		
		for(int i=0; i<entrada.length; i++) {
			items[i] = Integer.parseInt(entrada[i]);
		}
		
		for(int i=0; i<items.length; i++) {
			if(items[i] > b) {
				resultado = resultado + items[i] + ", ";
				cont++;
			}
		}

	    resultado = resultado.replaceFirst(".$","");
	    resultado = resultado.replaceFirst(".$","");
        
		if(resultado == "") {
			return "Nenhuma nota passou";
		} else {
			return "Notas que passaram: "+resultado+"<br> Total de notas que passaram: "+cont;
		}
       
	}
}
