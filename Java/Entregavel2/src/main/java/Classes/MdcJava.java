package Classes;

public class MdcJava {
	public String calcula(String valor1, String valor2) {
		
		int a = Integer.parseInt(valor1);
		int b = Integer.parseInt(valor2);
		
		while(b != 0){
			int r = a % b;
	        a = b;
	        b = r;
	    }
        
        return "O MDC é igual a "+a; 
       
	}
}
