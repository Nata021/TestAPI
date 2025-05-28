import json

# Відкриваємо та читаємо файл lists.json
with open('lists.json', 'r', encoding='utf-8') as file:
    data = json.load(file)

# Отримуємо масив зі словника
lists = data.get("lists", [])

# Виводимо id та name кожного елементу
print("➡️ ID та Name кожного списку:")
for item in lists:
    print(f"ID: {item['id']}, Name: {item['name']}")