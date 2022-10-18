package Classes;

public class SortJava {
	
	public String calcula(String numero) {
		numero.trim();
		String entrada[] = numero.split("\\s+");
		int items[] = new int[entrada.length];
		
		for(int i=0; i<entrada.length; i++) {
			items[i] = Integer.parseInt(entrada[i]);
		}
	      
	    ordenarVetorDeInteiros(items);
	    
	    String resultado = "";
	    
	    for(int num : items) {
            resultado = resultado + num + ", ";
        }
	    
	    resultado = resultado.replaceFirst(".$","");
	    resultado = resultado.replaceFirst(".$","");
	    
	    return resultado;
	}

	public static void ordenarVetorDeInteiros(int[] vetor) {
	    quickSort(vetor, 0, vetor.length - 1);
	}

	private static void quickSort(int[] vetor, int inicio, int fim) {
	    if(fim > inicio) {
	        int indexPivo = dividir(vetor, inicio, fim);
	        quickSort(vetor, inicio, indexPivo - 1);
	        quickSort(vetor, indexPivo + 1, fim);
	    }
	}

	private static int dividir(int[] vetor, int inicio, int fim) {
	    int pivo, pontEsq, pontDir = fim;
	    pontEsq = inicio + 1;
	    pivo = vetor[inicio];

	    while(pontEsq <= pontDir) {
	      while(pontEsq <= pontDir && vetor[pontEsq] <= pivo) {
	        pontEsq++;
	      }

	      while(pontDir >= pontEsq && vetor[pontDir] > pivo) {
	        pontDir--;
	      }

	      if(pontEsq < pontDir) {
	        trocar(vetor, pontDir, pontEsq);
	        pontEsq++;
	        pontDir--;
	      }
	    }

	    trocar(vetor, inicio, pontDir);
	    return pontDir;
	}
	  
	private static void trocar(int[] vetor, int i, int j) {
	    int temp = vetor[i];
	    vetor[i] = vetor[j];
	    vetor[j] = temp;
	}
}
