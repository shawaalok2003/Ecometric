const balance = document.getElementById(
    'balance'
    );

const estimation_plus = document.getElementById('estimation-plus');
const estimation_minus = document.getElementById('estimation-minus');
const list = document.getElementById("list");
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

// const dummyEstimations = [
//     {id: 1, text: "Flower", amount: -20},
//     {id: 2, text: "Flower", amount: -20},
//     {id: 3, text: "Flower", amount: -20},
//     {id: 4, text: "Flower", amount: -20},
// ];

//let Estimations = [];

const localStorageEstimations = JSON.parse(localStorage.getItem('estimations'));

let estimations = localStorage.getItem('estimations') !== null ? localStorageEstimations : [];


//Add estimation
function addEstimation(e){
    e.preventDefault();
    if(
        text.value.trim() === "" || amount.value.trim() === ""
    ){
        alert("Please Enter Text And Value")
    }else{
        const estimation = {
            id:generateID(),
            text:text.value,
            amount: +amount.value,
        };

        estimations.push(estimation);
        addEstimationDOM(estimation);
        updateValues();
        updateLocalStorage();
        text.value= "";
        amount.value = "";
    }
}

//generate id
function generateID(){
    return Math.floor(Math.random()*100000000);
}

function addEstimationDOM(estimation){
    console.log(estimation);
    const sign = estimation.amount < 0 ? "-" : "+";
    const item = document.createElement("li");

    item.classList.add(
        estimation.amount < 0 ? "minus" : "plus"
    );

    item.classList.add(
        estimation.amount < 0 ? "minus" : "plus"
    );

    item.innerHTML = `
    ${estimation.text}<span>${sign}${Math.abs(estimation.amount)}</span>
    <button class="delete-btn" onclick="removeEstimation(${estimation.id})">x</button>
    `;

    list.appendChild(item);
}

//update updateValues

function updateValues(){
    const amounts = estimations.map((estimation) => estimation.amount);
    const total = amounts.reduce((acc, item) => (acc += item),0).toFixed(2);
    const currentmonth = amounts.filter(item => item > 0).reduce((acc, item)=> (acc += item),0).toFixed(2);
    const pastmonth = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item),0) * -1
    ).toFixed(2);

    balance.innerText = `${total}kg CO2e/month`;
    estimation_plus.innerText=`${currentmonth}kg CO2e/month`;
    estimation_minus.innerText=`${pastmonth}kg CO2e/month`;
}

function removeEstimation(id){
    estimations = estimations.filter(estimation => estimation.id !== id);
    updateLocalStorage();
    Init();
}

function updateLocalStorage(){
    localStorage.setItem('testimations', JSON.stringify(estimations));
}

//init App
function Init(){
    list.innerHTML="";
    estimations.forEach(addEstimationDOM);
    updateValues();
}


// addEstimationsDOM(Estimations);
Init();

form.addEventListener("submit", addEstimation);