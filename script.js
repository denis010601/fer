// // /* let score = document.querySelector("#score");
// // let up = document.querySelector("#up");
// // let down = document.querySelector("#down");
// // let i = 0; // счетчик
// // score.setAttribute('value', i) 
// // function upScore(){
// //     i++;
// //     score.setAttribute('value', i)  // обратились к атрибуту и указали значение i
// //     return i
// // }

// // function downScore(){
// //     i--;
// //     score.setAttribute('value', i) 
// //     return i
// // }
// // up.addEventListener('click', upScore);
// // down.addEventListener('click', downScore)

// // */




// // // matches
// // let menu = document.querySelector(".menu");
// // let item1 = menu.querySelector(".item1");
// // let item2 = menu.querySelector(".item2");

// // item1.innerHTML = "<h1> окей </h1>";
// // item2.textContent = "<h1> окей </h1>";

// // // if(item.matches(`[class='item red']`)){
// // //     console.log("красный")
// // // }

// // let div = document.createElement('div')
// // let ul = document.createElement('ul')
// // let p = document.createElement('p')
// // let span = document.createElement('span') // Создает новый элемент (ТЭГ)
// // menu.before(div) // перед menu
// // menu.after(ul) // после menu
// // menu.prepend(span) // внутрь menu в начало menu
// // menu.append(p) // внутрь menu в конец menu

// // /**
// //  * 
// //  */

// // let box2 = document.querySelector(".box2")
// // box2.insertAdjacentHTML('beforebegin', '<p>окей1</p>') // перед box2
// // box2.insertAdjacentHTML('afterend', '<p>окей2</p>') // после box2
// // box2.insertAdjacentHTML('afterbegin', '<p>окей3</p>') // в начало box2
// // box2.insertAdjacentHTML('beforeend', '<p>окей4</p>') // в конец box2


// // // cloneNode()
// // let body = document.querySelector('body')
// // let menu1 = menu.cloneNode(true);
// // body.append(menu1)

// // let items2 = document.querySelector(".items2");
// // // console.log(items2.previousElementSibling)
// // // console.log(items2.nextElementSibling)
// // // console.log(items2.parentElement)

// // let menu2 = document.querySelector(".menu2")
// // // console.log(menu2.firstElementChild)
// // // console.log(menu2.lastElementChild)
// // console.log(menu2.childNodes[3])
// // menu2.remove();
// // function f2(){
// //     // получаем все блоки RGB в массив A
// //     let a = document.querySelectorAll('.color-block')
// //     // обрабатываем наш массив
// //     for( let i = 0; i < a.length; i++){
// //         // при клике на определенный блок удаляем его
// //         a[i].addEventListener('click', function(){
// //             a[i].remove()
// //         })
// //     }
// // }

let addbtn = document.querySelector("#addbtn"); // нашли кнопку добавления
let box = document.querySelector(".box"); // нашли box в который будем все записывать
let lorem = document.querySelector(".lorem");
// функция
function generator(){
    // red green blue получают рандомные значения для каждово цвета от 0 до 255
    let red = Math.floor(Math.random(0,255) * 255);
    let green = Math.floor(Math.random(0,255) * 255);
    let blue = Math.floor(Math.random(0,255) * 255);
    // генерация цветного блока RGB 
    let colorBlock = `<div data-color-text="rgb(${red},${green},${blue} )" style="background: rgb(${red},${green},${blue} )" class="color-block" id="reds"></div>`
    // добавяем в box нашу кнопку
    box.innerHTML += colorBlock;
    // вызываем функцию f2
    f2()
    // возращаем наше значение кнопки
    return colorBlock
}



function f2(){
    // получаем все блоки RGB в массив A
    let a = document.querySelectorAll('.color-block')
    // обрабатываем наш массив
    for( let i = 0; i < a.length; i++){
        // при клике на определенный блок 
        a[i].addEventListener('click', function(){
            // lorem.innerHTML = a[i].dataset.colorText
            lorem.style.color = a[i].dataset.colorText
        })
    }
}

addbtn.addEventListener('click', generator)


// let personName = document.querySelector("#name");
// let commentText = document.querySelector("#comment-text");
// let commentList = document.querySelector(".comment-list")
// let btn = document.querySelector(".submit")
// function addComment(){
//     let itemLi = document.createElement("li")
//     let names = document.createElement("div")
//     let comments = document.createElement("div") 
//     names.textContent = personName.value
//     comments.textContent = commentText.value

//     itemLi.append(names)
//     itemLi.append(comments)
//     commentList.append(itemLi)
//     personName.value = ""
//     commentText.value = ""
// }

// btn.addEventListener("click", addComment)

