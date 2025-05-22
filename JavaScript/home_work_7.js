const array = [4, 4, 8, 3, 3, 3, 2, 4, 4];

// 1. Вивести кожен елемент
console.log('1. Вивід кожного елемента масиву:');
array.forEach(element => console.log(element));

// 2. Вивести перші 3 елементи без помилки
console.log('\n2. Перші 3 елементи масиву:');
array.slice(0, 3).forEach(element => console.log(element));

// 3. Сума всіх елементів
const totalSum = array.reduce((acc, cur) => acc + cur, 0);
console.log('\n3. Сума всіх елементів масиву:');
console.log(totalSum);

// 4. Сума елементів, крім 4
const sumExcluding4 = array
  .filter(el => el !== 4)
  .reduce((acc, cur) => acc + cur, 0);
console.log('\n4. Сума елементів, окрім 4:');
console.log(sumExcluding4);