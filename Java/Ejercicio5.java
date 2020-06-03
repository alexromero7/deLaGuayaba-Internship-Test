// Alexey Romero Sánchez - Ejercicio 5

public class ejercicio5 {

	public static void main(String[] args) {
		int[] array5 = {1,2,2,5,4,6,7,8,8,8};

	    int[] out = ocurrencias(array5);

	    System.out.println("Ocurrencias: " + out[1] );
	    System.out.println("Numero: "  + out[0]);

	  }

	  public static int[] ocurrencias(int[] array5)
	  	{
		  int number = array5[0];
		  int temp_number = 0;
		  int max_contador = 1;
		  int contador;
	  
		  for (int i = 0; i < (array5.length); i++)
		  	{
			  temp_number = array5[i];
			  contador = 0;
			  for (int j = 0; j < array5.length; j++)
			  	{
				  if (temp_number == array5[j]) {
					  contador++;
				  }
			  	}
			  if (contador > max_contador)
			  	{
				  max_contador = contador;
				  number = temp_number;
			  	}
		  	}
		  int[] numero_maxCount = {number, max_contador};
	  	  return numero_maxCount;
	  	}
}
