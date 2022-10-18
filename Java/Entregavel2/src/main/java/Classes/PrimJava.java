package Classes;

public class PrimJava {
	public String calcula(String numero) {
		
		int validar = Integer.parseInt(numero);
		
        int cont = 0;
        
        for(int j=2; j<validar; j++){
          if(validar%j==0){
            cont++;
          }
        }
        
        if(validar == 1 || validar == 0) {
        	return numero+" não eh primo";
        } else if(cont==0){
        	return numero+" eh primo";
        } else {
        	return numero+" não eh primo";
        }
       
	}
}

