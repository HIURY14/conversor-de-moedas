

const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")  /*valor em real*/
    const currencyValueConverted = document.querySelector(".currency-value") /*outros moedas*/



    const dolarToday = 5.2   /*fazer a soma de real para outras moedas*/
    const euroToday = 6.2

    if (currencySelect.value == "dolar") {     // SE O SELECT ESTIVER SELECIONADO O VALOR DE DOLAR, ENTRE AQUI
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue / dolarToday)
    }


    if (currencySelect.value == "euro") {// SE O SELECT ESTIVER SELECIONADO O VALOR DE EURO, ENTRA AQUI
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue / euroToday)
    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputCurrencyValue)
}


function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    convertValues() 
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
