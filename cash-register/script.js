let price = 19.5;
let cid = [
  ['PENNY', 0.6],
  ['NICKEL', 0],
  ['DIME', 0],
  ['QUARTER', 0],
  ['ONE', 0],
  ['FIVE', 0],
  ['TEN', 0],
  ['TWENTY', 0],
  ['ONE HUNDRED', 0]
];


const currencies = [
  ['penny', 0.01],
  ['nickel', 0.05],
  ['dime', 0.1],
  ['quarter', 0.25],
  ['dollar', 1],
  ['five dollars', 5],
  ['ten dollars', 10],
  ['twenty dollars', 20],
  ['one hundred dollars', 100],
]



const cashInput = document.getElementById("cash");
const changeDueDiv = document.getElementById("change-due");

const displayRegisterCash = () => {
  for(let i = 0; i < cid.length; i++) {
    document.getElementById(`currency-${i}`).textContent = `$${cid[i][1]}`;
  }
}

window.onload = (event) => {
  displayRegisterCash();
};

const calculate = () => {
  const cash = cashInput.value;
  let changeArray = [
    ['PENNY', 0],
    ['NICKEL', 0],
    ['DIME', 0],
    ['QUARTER', 0],
    ['ONE', 0],
    ['FIVE', 0],
    ['TEN', 0],
    ['TWENTY', 0],
    ['ONE HUNDRED', 0]
  ];
  console.log(cash);

  if(cash < price) {
    alert("Customer does not have enough money to purchase the item");
  } else if (cash == price) {
    changeDueDiv.textContent = "No change due - customer paid with exact cash";
  } else {
    let change = Math.round((cash - price) * 100) / 100; // Fix floating point bug
    let registerCashAmount = 0;
    cid.forEach(el => registerCashAmount += el[1])
    
    
    if (registerCashAmount >= change) {
      changeDueDiv.innerHTML = `<h3>Status: ${registerCashAmount > change ? "OPEN" : "CLOSED"}</h3>`;
      let result = ""
      
      // Create copies of variables for testing
      let calcCid = cid
      
      // Calculate all values
      for (let i = 8; i >= 0; i--) {
        while(change >= currencies[i][1] && calcCid[i][1] >= currencies[i][1]) {
          change = Math.round((change - currencies[i][1]) * 100) / 100;
          changeArray[i][1] = Math.round((changeArray[i][1] + currencies[i][1]) * 100) / 100;
          calcCid[i][1] = Math.round((calcCid[i][1] - currencies[i][1]) * 100) / 100;
        }
        if (changeArray[i][1] > 0) {
          result += `<span>${changeArray[i][0]}: $${changeArray[i][1]}</span><br />`
        }
      }

      if (change == 0) {
        changeDueDiv.innerHTML += result

        // Update cash in register
        cid = calcCid;
        displayRegisterCash();
      } else {
        changeDueDiv.innerText = "Status: INSUFFICIENT_FUNDS"
      }  
    } else {
      changeDueDiv.innerText = "Status: INSUFFICIENT_FUNDS"
    }
  }
}





