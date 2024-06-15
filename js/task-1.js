
const items = document.querySelectorAll('ul#categories li.item');


const numberOfCategories = items.length;
console.log(`Liczba kategorii: ${numberOfCategories}`);


items.forEach((item) => {
  
  const headerText = item.querySelector('h2').textContent;

  
  const numberOfElements = item.querySelectorAll('li').length;

 
  console.log(`Kategoria: ${headerText}, Liczba elementów: ${numberOfElements}`);
});