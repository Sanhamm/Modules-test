import {round} from './utils.mjs'

export async function currencyConverter (amount, from, to, out) {


const requestURL = `https://api.exchangerate.host/convert?from=${from}&to=${to}`;

fetch(requestURL)
.then((response) => response.json())
.then((data) => {
    let result = round(amount * data.result);
    out.innerText = `${from} ${amount} = ${to} ${result}`;
})
};

export async function getAllCurrencies() {

var requestURL = 'https://api.exchangerate.host/symbols';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response;
  console.log(response.symbols);
}
        
}