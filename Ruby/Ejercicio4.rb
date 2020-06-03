# Alexey Romero Sánchez - Ejercicio 4
def counter numeros
  numeros.inject(Hash.new(0)) do|dictionary, i|
    dictionary[i] += 1
    dictionary
  end
end

array4 = [1,2,1,3,3,1,2,1,5,1]
counter array4
