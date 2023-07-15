// document.getElementsByClassName("main-title")[0].style.color = "red";

//обработчик события по клику на кнопку
document.getElementById("main-action-button").onclick = function () {
    document.getElementById("products").scrollIntoView({behavior:"smooth"});
};

// ищем все ссылки

let links = document.querySelectorAll(".menu-items > a");
for (let i = 0; i < links.length; i++ ) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior:"smooth"});
    }
}

// ищем все кнопки

let buttons = document.getElementsByClassName("products-button");
for (let i = 0; i < buttons.length; i++ ) {
    buttons[i].onclick = function () {
        document.getElementById("order").scrollIntoView({behavior:"smooth"});
    }
}

//проверка на валидацию, обработчик события по нажатию на кнопку


let burger = document.getElementById("burger");
let name = document.getElementById("name");
let phone = document.getElementById("phone");

//обработчик события на кнопку
document.getElementById("order-action").onclick = function () {
    let hasEror = false;

    [burger, name, phone].forEach(item => {
        if (!item.value) {
            item.parentElement.style.background = "red";
            hasEror = true;
        } else {
            item.parentElement.style.background = "";
        }
    });

    if (!hasEror) {
        [burger, name, phone].forEach(item => {
            item.value = "";
        });
        alert("Спасибо за заказ! Мы скоро свяжемся с Вами");
    }
}

// // изменение курса валют
let prices = document.getElementsByClassName("products-item-price");
document.getElementById("change-currency").onclick = function (e) {
    let currentCurrency = e.target.innerText;

    let newCurrency = "$";
    let coefficient = 1;

    if (currentCurrency === "$") {
        newCurrency = "₽";
        coefficient = 80;
    } else if (currentCurrency === "₽") {
        newCurrency = "BYN";
        coefficient = 3;
    } else if (currentCurrency === 'BYN') {
        newCurrency = '€';
        coefficient = 0.9;
    } else if (currentCurrency === '€') {
        newCurrency = '¥';
        coefficient = 6.9;
    }


    e.target.innerText = newCurrency;

    for (let i = 0; i < prices.length; i++) {
        prices[i].innerText = +(prices[i].getAttribute("data-base-price") * coefficient).toFixed(1) + " " + newCurrency;
    }
}




