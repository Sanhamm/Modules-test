import fibonacci from "./script/fibonacci.mjs";
import { celsiusToFarenheit, farenheitToCelsius } from "./script/temperature.mjs";
import { currencyConverter, getAllCurrencies } from "./script/currency.mjs";
import { getAllAmiibos, filterAmiibos } from "./script/amiibo.mjs";


//fibonacci converter
document.getElementById("submit-fib").addEventListener("click", () => {
    let n = document.getElementById("fib").value;
    let fn = fibonacci(n);
    document.getElementById("fib-result").innerHTML = `F<sub>${n}</sub> = ${fn}`;

});

//clesius to farenheit
document.getElementById("submit-temp").addEventListener("click", () => {
    const out = document.getElementById("temp-result");
    const temp = document.getElementById("temp").value;
    const radiobButtons = document.querySelectorAll('input[name="temp-type"]');
    let fromType;
    for (let btn of radiobButtons){
        if(btn.checked) {
            fromType = btn.id;
            break;
        }
    }
    if (fromType == 'celcius'){
        out.innerHTML = `${temp}°C = ${celsiusToFarenheit(temp)}°F`
    } else if (fromType === 'farenheit') {
        out.innerHTML = `${temp}°F = ${farenheitToCelsius(temp)}°C`

    }else {
        out.innerText = "feil"
    }
});

//currency
document.getElementById("submit-currency").addEventListener('click', () => {
    const out = document.getElementById("currency-result")
    let amount = document.getElementById("amount").value;
    const from = document.getElementById("convertFrom").value;
    const to = document.getElementById("convertTo").value;
    if(amount === "") amount = 100;
    currencyConverter(amount, from, to, out);

})

const fromCurrencylist = document.getElementById("convertFromSymbols")
const toCurrencylist = document.getElementById("convertToSymbols")
getAllCurrencies(fromCurrencylist, toCurrencylist)

//Amiibo

const outPutElement = document.getElementById("amiibos")
getAllAmiibos(outPutElement)

let searchBox = document.getElementById("search-amiibos")
searchBox.addEventListener('input', updateSearch)

let nameCheckBox = document.getElementById("amiibo-name")
nameCheckBox.addEventListener('input', updateSearch)

let gameSeriesBox = document.getElementById("amiibo-game")
gameSeriesBox.addEventListener('input', updateSearch)

let amiiboSeriesBox = document.getElementById("amiibo-series")
amiiboSeriesBox.addEventListener('input', updateSearch)


function updateSearch() {
    let searchString = searchBox.value;
    let nameOpt = nameCheckBox.checked;
    let GameSeriesOpt = gameSeriesBox.checked;
    let amiiboSeriesOpt = amiiboSeriesBox.checked;
    
    let options = {nameOpt, GameSeriesOpt, amiiboSeriesOpt}

    //console.log(`search for ${searchString}`, options);
    filterAmiibos(searchString, outPutElement, options);
}

document.getElementById("openAll").addEventListener('click', () => {
    toggleDetails("open")
})
document.getElementById("closeAll").addEventListener('click', () => {
    toggleDetails("close")

})

function toggleDetails(mode){
    let detailsElements = document.querySelectorAll("details");
    //console.log(detailsElements.length);
    for( let element of detailsElements) {
        if (mode === 'open') element.setAttribute('open', true)
        if (mode === 'close') element.removeAttribute('open')
    }
}