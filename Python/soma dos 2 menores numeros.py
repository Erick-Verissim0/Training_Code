def sum_two_smallest_numbers(numbers):
    sortedNumber = sorted(numbers) # metodo sorted cria um novo array com os números de maneira ascendente
    sumMinNumbers = sortedNumber[0] + sortedNumber[1]

    print(sumMinNumbers)
    return sumMinNumbers


number = [19, 5, 42, 2, 77]

sum_two_smallest_numbers(number)


number2 = [10, 343445353, 3453445, 3453545353453]
sum2 = sum_two_smallest_numbers(number2)
