import { readFileSync } from 'fs';

try {
    const raw = readFileSync('./list.json', 'utf8');
    const data = JSON.parse(raw);

    if (Array.isArray(data.lists)) {
        data.lists.forEach(({ id, name }) => {
            console.log(`ID: ${id}, Name: ${name}`);
        });
    } else {
        console.error('Поле "lists" відсутнє або не є масивом.');
    }
} catch (error) {
    console.error('Помилка:', error.message);
}