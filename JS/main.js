/*const circle = {
    r : 10,
    pi : 3.141592,
};
console.log("원이 반지름이 " + circle.r + "인 원의 둘레는 " +  2*circle.pi*circle.r);
document.write("원이 반지름이 " + circle.r + "인 원의 둘레는 " +  2*circle.pi*circle.r);

function iAmHungry(ramenA, ramenB){
    document.write(ramenA + "먼저먹고 " + ramenB + "먹는다");
};

iAmHungry("참깨라면", "육개장" ); 

const iLikeRamen ={
    iLoveRamen : function(ramen1, ramen2){
     document.write(ramen1 + "다먹고 " + ramen2 + "먹어야겠다");
    },
};
iLikeRamen.iLoveRamen("참깨참깨", "육개육개");

const calculator = {
    add : function(x,y){
        document.write(x+y);
    },
    minus : function(x,y){
        document.write(x-y);
    },
    multiple : function(x,y){
        document.write(x*y);
    },
    divide : function(x,y){
        document.write(x/y);
    },
}

calculator.add(2, 2);
calculator.minus(2, 1);
calculator.multiple(2, 4);
calculator.divide(4, 2);

const age = parseInt(prompt("how old are you?"));

if (isNaN(age) || age<0) {
    document.write("나이를 쳐라 이놈아");
} else if (age<=18 || age>=50){
    document.write("먹지마라.");
} else{
    document.write("마셔라");
}

if (isNaN(age) || age<0) {
    document.write("나이를 쳐라 이놈아");
} else if (age>=18 && age<=50){
    document.write("마셔라.");
} else{
    document.write("먹지마라");
}

function changeColor(){
    const originalColor = h1.style.color;
    let nextColor;
    if (originalColor === "blue") {
        nextColor = "tomato";
    } else {
        nextColor = "blue";
    }
    h1.style.color = nextColor;
}

const h1 = document.querySelector(".bgcolor")

function changeClassName (){
    h1.classList.toggle("clicked");
}

h1.addEventListener("click", changeClassName);
*/
const logInForm = document.querySelector(".login_form")
const logInInput = document.querySelector(".login_form input");
const logInButton = document.querySelector(".login_form button");

function logClick(enter){
    enter.preventDefault();
  console.log(logInInput.value);
}

logInForm.addEventListener("submit", logClick);

const link = document.querySelector("a");

function linkClick(event){
    alert("clicked");
    event.preventDefault();
}

link.addEventListener("click", linkClick);