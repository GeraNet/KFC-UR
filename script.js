const telegram = "https://t.me/Duf7484";


let cart = [];





let menu = {



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

["Coca-Cola 1 л",500],

["Sprite 0.5",300],

["Fanta 0.5",300],

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








function openCat(cat){


render(menu[cat]);


}





function render(list){


let box = document.getElementById("menu");


box.innerHTML = "";



let div = document.createElement("div");


div.className = "products";





list.forEach(item=>{


div.innerHTML += `

<div class="card">


<h3>

${item[0]}

</h3>



<p>

${item[1]} грн

</p>



<button onclick="add('${item[0]}',${item[1]})">

Додати

</button>



</div>

`;



});



box.appendChild(div);


}
function add(name,price){


let currentTotal = 0;


cart.forEach(item=>{


currentTotal += item[1];


});



let tips = Number(

document.getElementById("tips").value

)||0;





if(currentTotal + price + tips > 8000){


alert(

"❌ Максимальна сума замовлення 8000 грн"

);


return;


}





cart.push([name,price]);



update();


}








function addVIP(){


let current = 0;


cart.forEach(i=>{


current += i[1];


});





if(current + 1500 > 8000){


alert(

"❌ VIP місце перевищує ліміт 8000 грн"

);


return;


}





cart.push(

["VIP місце",1500]

);



update();


}









function update(){



let box = document.getElementById("cart");


box.innerHTML = "";



let sum = 0;




cart.forEach(item=>{


sum += item[1];



box.innerHTML += `


<p>

${item[0]} - ${item[1]} грн

</p>


`;



});





let tips = Number(

document.getElementById("tips").value

)||0;





document.getElementById("food").innerHTML = sum;



document.getElementById("total").innerHTML = sum + tips;



}








function order(){



let total = Number(

document.getElementById("total").innerHTML

);






if(total < 1000){


alert(

"❌ Мінімальна сума замовлення 1000 грн"

);


return;


}





if(total > 8000){


alert(

"❌ Максимальна сума замовлення 8000 грн"

);


return;


}




window.open(telegram);


}








function simpleBooking(){


window.open(telegram);


}









function searchFood(){



let text = document

.getElementById("search")

.value

.toLowerCase();





let all = [];





Object.values(menu)

.forEach(x=>{


all.push(...x);


});






render(

all.filter(item=>


item[0]

.toLowerCase()

.includes(text)


)

);



}









function scrollToMenu(){


document

.getElementById("menu")

.scrollIntoView({

behavior:"smooth"

});


}








function scrollCart(){


document

.querySelector(".cart")

.scrollIntoView({

behavior:"smooth"

});


}








function scrollLocation(){


document

.querySelector(".location")

.scrollIntoView({

behavior:"smooth"

});


}








openCat("burgers");
