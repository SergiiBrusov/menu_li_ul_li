import { menuData } from "./modules/menuData.js";
console.log(menuData);

const menuContainer = document.getElementById("menu-container");

// Создаем элемент <ul> для основного меню
const ul = document.createElement("ul");

// Проходим по каждому элементу menuData
menuData.forEach((item) => {
  // Создаем элемент <li> для основного пункта меню
  const li = document.createElement("li");
  li.textContent = item.title;

  // Проверяем, есть ли подменю, и создаем его
  if (item.sousMenu && item.sousMenu.length > 0) {
    const subUl = document.createElement("ul");

    // Скрываем подменю по умолчанию
    subUl.style.display = "none";

    // Проходим по подменю и создаем <li> для каждого элемента
    item.sousMenu.forEach((subItem) => {
      const subLi = document.createElement("li");
      subLi.textContent = subItem;
      subUl.appendChild(subLi); // Добавляем пункт подменю
    });

    li.appendChild(subUl); // Добавляем подменю к основному элементу

    // Добавляем обработчик событий для показа/скрытия подменю
    li.addEventListener("click", () => {
      // Если подменю скрыто, показываем его; если показано — скрываем
      if (subUl.style.display === "none") {
        subUl.style.display = "block";
      } else {
        subUl.style.display = "none";
      }
    });
  }

  // Добавляем элемент <li> в <ul>
  ul.appendChild(li);
});

// Добавляем готовое меню в контейнер
menuContainer.appendChild(ul);
