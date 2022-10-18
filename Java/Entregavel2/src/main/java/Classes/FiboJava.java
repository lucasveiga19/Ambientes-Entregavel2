package Classes;

public class FiboJava {
	public String calcula(String numero) {
		
		int validar = Integer.parseInt(numero);
		
        /*int cont = 0;
        
        for(int j=2; j<validar; j++){
          if(validar%j==0){
            cont++;
          }
        }*/
		
		int termo1 = 0;
        int termo2 = 1;
        int termo3;
        
        String resultado=" 0 1 ";
        
        for(int i=3; i<=validar; i++){
            termo3 = termo1+termo2;
            resultado = resultado + termo3 + " ";
            termo1 = termo2;
            termo2 = termo3;
          }
        
        if(validar == 1) {
        	return "0";
        } else if(validar == 2){
        	return " 0 1 ";
        } else {
        	return resultado;
        }
       
	}
}
