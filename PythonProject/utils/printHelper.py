def print_name(array):
    print("{:<10} {:<15}".format("Індекс", "Елемент"))
    print("-" * 25)
    for i, value in enumerate(array):
        print("{:<10} {:<15}".format(i, value))
    print("-" * 25)
    print("Це всі елементи масиву")