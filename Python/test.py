def soma_dois_menores(numeros):
    # Ordena a lista em ordem crescente
    numeros_ordenados = sorted(numeros)
    # Soma os dois primeiros elementos (os menores)
    soma = numeros_ordenados[0] + numeros_ordenados[1]
    return soma


numeros1 = [19, 5, 42, 2, 77]
soma1 = soma_dois_menores(numeros1)
print(soma1)  # resultado: 7

numeros2 = [10, 343445353, 3453445, 3453545353453]
soma2 = soma_dois_menores(numeros2)
print(soma2)  # resultado: 3453455
