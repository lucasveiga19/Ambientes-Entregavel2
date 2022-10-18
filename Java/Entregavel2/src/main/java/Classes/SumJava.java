package Classes;

public class SumJava {
	public String calcula(String numero) {
		
		numero.trim();
		String entrada[] = numero.split("\\s+");
		int valores[] = new int[entrada.length];
		int soma = 0;
		
		String resultado2="";
		
		for(int i=0; i<entrada.length; i++) {
			valores[i] = Integer.parseInt(entrada[i]);
			soma = soma + valores[i];
			resultado2 = resultado2+entrada[i]+", ";
		}
		
		String resultado = String.valueOf(soma);
		
		return "O somatório de "+ resultado2 +" é "+resultado;
	}
}
