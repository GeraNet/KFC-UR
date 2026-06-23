const telegram="https://t.me/Duf7484";


let cart=[];



let menu={


burgers:[
["Чізбургер",300],
["Дабл Чізбургер",450],
["Сандерс Класік",550],
["Сандерс Зінгер",650],
["Шефбургер",750],
["Боксмайстер",900],
["Гетьман Бургер ⭐",1200],
["Козацький Дабл Бургер ⭐",1500]
],


chicken:[
["3 Стріпси",500],
["5 Стріпсів",700],
["5 Крил",700],
["9 Нагетсів",600]
],


garnish:[
["Картопля Фрі",300],
["Картопля по-селянськи",400],
["Сирний соус",300],
["Барбекю соус",300]
],


drinks:[
["Coca-Cola 0.5",300],
["Coca-Cola 1л",500],
["Sprite",300],
["Fanta",300],
["Узвар ⭐",500],
["Лимонад Київський ⭐",600],
["Козак Energy ⭐",1000]
],


combo:[
["Зінгер Комбо",1200],
["Шефбургер Комбо",1500],
["Гетьман Комбо",2500],
["Козацьке Комбо",3000]
]


};



let current=[];



function openCat(cat){

current=menu[cat];

render(current);

}



function render(list){


let box=document.getElementById("menu");

box.innerHTML="";


let div=document.createElement("div");

div.className="products";



list.forEach(i=>{


div.innerHTML+=`

<div class="card">

<h3>${i[0]}</h3>

<p>${i[1]} грн</p>

<button onclick="add('${i[0]}',${i[1]})">

Додати

</button>


</div>


`;

});


box.appendChild(div);


}



function add(name,price){

cart.push([name,price]);

update();

}




function addVIP(){

cart.push(["VIP місце",1500]);

update();

}




function update(){


let box=document.getElementById("cart");

box.innerHTML="";


let sum=0;


cart.forEach(i=>{


sum+=i[1];


box.innerHTML+=`

<p>${i[0]} - ${i[1]} грн</p>

`;

});


let tips=

Number(document.getElementById("tips").value)||0;


document.getElementById("food").innerHTML=sum;

document.getElementById("total").innerHTML=sum+tips;


}




function order(){


let total=Number(document.getElementById("total").innerHTML);


if(total<1000){

alert("Мінімум 1000 грн");

return;

}


if(total>8000){

alert("Максимум 8000 грн");

return;

}


window.open(telegram);

}




function simpleBooking(){


window.open(telegram);


}




function searchFood(){


let text=document.getElementById("search").value.toLowerCase();


let all=[];


Object.values(menu).forEach(x=>{

all.push(...x)

});


render(

all.filter(x=>

x[0].toLowerCase().includes(text)

)

);


}



function scrollToMenu(){

document.getElementById("menu").scrollIntoView({

behavior:"smooth"

});

}



function scrollCart(){

document.querySelector(".cart").scrollIntoView({

behavior:"smooth"

});

}


openCat("burgers");
