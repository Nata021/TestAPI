from utils.printHelper import print_name

# Масив
my_array = [4, 4, 8, 3, 3, 3, 2, 4, 4]

# 1. Вивести кожен елемент масиву
print("➡️ Кожен елемент масиву:")
print_name(my_array)  # твоя функція з printHelper

# 2. Вивести перші 3 елементи
print("\n➡️ Перші 3 елементи:")
for i in range(3):
    print(f"Елемент {i}: {my_array[i]}")

# 3. Вивести суму всіх елементів
total_sum = sum(my_array)
print(f"\n➡️ Сума всіх елементів: {total_sum}")

# 4. Вивести суму всіх елементів, крім тих, що = 4
filtered_sum = sum(x for x in my_array if x != 4)
print(f"➡️ Сума без елементів = 4: {filtered_sum}")

