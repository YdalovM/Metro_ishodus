



/* ========== = =  Задачи  = = ============ */

// const elem = document.getElementById("elem")

// //Добавить
// function addClass(elem) {
//     elem.classList.add("www");
// }


// // Удалить
// function removeClass(elem) {
//     elem.classList.remove("www");
// }


// // Проверить
// function checkClass(elem) {
//     return elem.classList.contains("www");
// }


// // Добавить
// function toggleClass(elem) {
//     elem.classList.toggle("www");
// }


// // Узнать
// function getClass(elem) {
//     return elem.classList.length;
// }


// // Вывести
// function showAlertClasses(elem) {
//     elem.classList.forEach((className) => {
//         alert(className);
//     });
// }
// console.log(elem);


// let elem = document.querySelector("#elem");
// let button = document.querySelector("button");
// button.addEventListener("click", function() {
//     let topBorderWidth = elem.clientTop;
//     console.log("Толщина верхней границы: " + topBorderWidth);
// });


// let elem = document.querySelector("#elem");
// let button = document.querySelector("button");
// button.addEventListener("click", function() {
//     let leftBorderWidth = elem.clientLeft;
//     console.log("Толщина левой границы: " + leftBorderWidth);
// });


// let elem = document.querySelector("#elem");
// let button = document.querySelector("button");
// button.addEventListener("click", function() {
//     let fullWidth = elem.offsetWidth;
//     console.log("Полная ширина элемента: " + fullWidth);
// });


// let elem = document.querySelector("#elem");
// let button = document.querySelector("button");
// button.addEventListener("click", function() {
//     let fullHeight = elem.offsetHeight;
//     console.log("Полная высота элемента: " + fullHeight);
// });

// let elem = document.querySelector("#elem");
// let button = document.querySelector("button");
// button.addEventListener("click", function() {
//     let contentWidth = elem.clientWidth;
//     console.log("Полная ширина элемента без границы, но с padding: " + contentWidth);
// });

// let elem = document.querySelector("#elem");
// let button = document.querySelector("button");
// button.addEventListener("click", function() {
//     let contentHeight = elem.clientHeight;
//     console.log("Полная высота элемента без границы, но с padding: " + contentHeight);
// });

// const elem = document.querySelector("#elem")
// const styles = getComputedStyle(elem);

// const width = parseFloat(styles.width) - parseFloat(styles.borderLeftWidth) - parseFloat(styles.borderRightWidth) - parseFloat(styles.paddingLeft) - parseFloat(styles.paddingRight);
// const height = parseFloat(styles.height) - parseFloat(styles.borderTopWidth) - parseFloat(styles.borderBottomWidth) - parseFloat(styles.paddingTop) - parseFloat(styles.paddingBottom);

// console.log("Ширина элемента без учета границы и padding:", width);
// console.log("Высота элемента без учета границы и padding:", height);

// const scrollButtonTop = document.querySelector("#scroll-top-button");

// scrollButtonTop.addEventListener("click", function() {
//     const scrollTop = elem.scrollTop;
//     console.log("Элемент прокручен сверху на", scrollTop, "пикселей");
// });

// const scrollButtonLeft = document.querySelector("#scroll-left-button");

// scrollButtonLeft.addEventListener("click", function() {
//     const scrollLeft = elem.scrollLeft;
//     console.log("Элемент прокручен слева на", scrollLeft, "пикселей");
// });
// const scrollToTopButton = document.querySelector("#scroll-to-top-button");

// scrollToTopButton.addEventListener("click", function() {
//     elem.scrollTop = 100;
// });

// const scrollDownButton = document.querySelector("#scroll-down-button");

// scrollDownButton.addEventListener("click", function() {
//     const scrollTop = elem.scrollTop;
//     elem.scrollTop = scrollTop + 100;
// });

// const verticalScrollElement = document.querySelector('#elem');
// const horizontalScrollElement = document.querySelector('#elem');
// const verticalHeightButton = document.querySelector('#vertical-button');
// const horizontalWidthButton = document.querySelector('#horizontal-button');
// const scrollButton = document.querySelector('#scroll-button');
// const verticalPageScrollButton = document.querySelector('#vertical-page-button');
// const horizontalPageScrollButton = document.querySelector('#horizontal-page-button');

// verticalHeightButton.addEventListener('click', () => {
//     const height = verticalScrollElement.scrollHeight;
//     console.log('Высота элемента:', height);
// });

// horizontalWidthButton.addEventListener('click', () => {
//     const width = horizontalScrollElement.scrollWidth;
//     console.log('Ширина элемента:', width);
// });

// scrollButton.addEventListener('click', () => {
//     verticalScrollElement.scrollTop = verticalScrollElement.scrollHeight - 100;
// });

// verticalPageScrollButton.addEventListener('click', () => {
//     const verticalScroll = window.pageYOffset;
//     console.log('Вертикальный скролл страницы:', verticalScroll);
// });

// horizontalPageScrollButton.addEventListener('click', () => {
//     const horizontalScroll = window.pageXOffset;
//     console.log('Горизонтальный скролл страницы:', horizontalScroll);
// });


// const button1 = document.getElementById('button1');
// button1.addEventListener('click', () => {
//     window.scrollTo(300, 500);
// });

// const button2 = document.getElementById('button2');
// button2.addEventListener('click', () => {
//     window.scrollBy(0, 300);
// });

// const button3 = document.getElementById('button3');
// button3.addEventListener('click', () => {
//     window.scrollTo(0, document.body.scrollHeight);
// });

// const button4 = document.getElementById('button4');
// button4.addEventListener('click', () => {
//     window.scrollBy(0, 400);
// });

// const button5 = document.getElementById('button5');
// button5.addEventListener('click', () => {
//     if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
//     window.scrollTo(0, 100);
//     }
// });

// const elem = document.getElementById('elem');
// elem.addEventListener('click', () => {
//   elem.style.width = (parseFloat(getComputedStyle(elem).width) * 2) + 'px';
//   elem.style.height = (parseFloat(getComputedStyle(elem).height) * 2) + 'px';
// });