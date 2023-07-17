'use strict';

const categoryElements = document.querySelectorAll('ul#categories li.item');
console.log(`Number of categories: ${categoryElements.length}`);

categoryElements.forEach(element => {
    const categoryName = element.querySelector('h2').textContent;
    const categoryItemsCount = element.querySelectorAll('li').length;
    console.log(`Category: ${categoryName}\nElements: ${categoryItemsCount}`);
});
