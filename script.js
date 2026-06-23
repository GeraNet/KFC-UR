const menu=[


["Чізбургер",300,"🍔"],
["Дабл Чізбургер",450,"🍔"],
["Сандерс Класік",550,"🍔"],
["Сандерс Зінгер",650,"🍔"],
["Шефбургер",750,"🍔"],
["Боксмайстер",900,"🍔"],
["Гетьман Бургер ⭐",1200,"🍔"],
["Козацький Дабл Бургер ⭐",1500,"🍔"],


["3 Стріпси",500,"🍗"],
["5 Стріпсів",700,"🍗"],
["5 Крил",700,"🍗"],
["9 Нагетсів",600,"🍗"],


["Картопля Фрі",300,"🍟"],
["Картопля по-селянськи",400,"🍟"],
["Сирний соус",300,"🍟"],
["Барбекю соус",300,"🍟"],


["Coca-Cola 0.5",300,"🥤"],
["Coca-Cola 1 л",500,"🥤"],
["Sprite 0.5",300,"🥤"],
["Fanta 0.5",300,"🥤"],
["Узвар ⭐",500,"🥤"],
["Лимонад Київський ⭐",600,"🥤"],
["Козак Energy ⭐",1000,"🥤"],


["Зінгер Комбо",1200,"🎁"],
["Шефбургер Комбо",1500,"🎁"],
["Гетьман Комбо",2500,"🎁"],
["Козацьке Комбо",3000,"🎁"]


];


let cart=[];



const products=document.getElementById("products");



menu.forEach(item=>{


products.innerHTML+=`

<div class="card">

<h3>
${item[2]} ${item[0]}
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





function add(name,price){

cart.push({

name,

price

});


update();

}



function update(){


let box=document.getElementById("cartItems");


let sum=0;


box.innerHTML="";


cart.forEach(i=>{


sum+=i.price;


box.innerHTML+=`

<p>
${i.name} - ${i.price} грн
</p>

`;

});


document.getElementById("foodPrice").innerHTML=sum;


calc();


}



function calc(){


let food=Number(document.getElementById("foodPrice").innerHTML);


let tips=Number(document.getElementById("tips").value);


document.getElementById("total").innerHTML=food+tips;


}



document.getElementById("tips").oninput=calc;




function telegramOrder(){


let total=Number(document.getElementById("total").innerHTML);



if(total<1000){

alert(
"Мінімальна сума замовлення 1000 грн з чайовими"
);

return;

}


if(total>8000){

alert(
"Максимальна сума замовлення 8000 грн"
);

return;

}



window.open(

"https://t.me/Duf7484",

"_blank"

);


}




function scrollToMenu(){

document.getElementById("menu")
.scrollIntoView({

behavior:"smooth"

});

}



function scrollToCart(){

document.querySelector(".cart")
.scrollIntoView({

behavior:"smooth"

});

}
