const array = [];
const setArray = [];
for (let i = 0; i < 1000; i++) {
  array.push(1);
  array.push(2);
  array.push(3);
  array.push(4);
  array.push(5);
  array.push(6);
}

array.forEach(element => {
  if (!setArray.includes(element)) setArray.push(element);
});

console.log(setArray);
