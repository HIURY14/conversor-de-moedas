const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelect2 = document.querySelector(".currency-covert")







function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert")  /*valor em real*/
  const currencyValueConverted = document.querySelector(".currency-value") /*outros moedas*/
  

  const dolarToday = 5.2   /*fazer a soma de real para outras moedas*/
  const euroToday = 6.2
  const libraToday = 7.2
  const btcToday = 127.080
  const realToday = 1.0


  const dolarToEuro = 0.93
  const dolarToLibra = 0.80
  const dolarToBitcoin = 0.000024


  const euroToDolar = 1.08
  const euroToReal = 5.36
  const euroToLibra = 0.86
  const euroToBitcoin = 0.000026





  if(currencySelect2.value == "real-to"){
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(inputCurrencyValue)
  }


  if(currencySelect2.value == "dolar-to"){
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(inputCurrencyValue)
  }


  if(currencySelect2.value == "euro-to"){
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(inputCurrencyValue)
  }




















  if (currencySelect.value == "real") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(inputCurrencyValue/ realToday)
    
  }


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

  if (currencySelect.value == "libra") {// SE O SELECT ESTIVER SELECIONADO O VALOR DE EURO, ENTRA AQUI
    currencyValueConverted.innerHTML = new Intl.NumberFormat("UK", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / libraToday)

  }



  if (currencySelect.value == "bitcoin") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("BTC", {
      style: "currency",
      currency: "BTC",
    }).format(inputCurrencyValue / btcToday)

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


  if (currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra"
    currencyImage.src = "./assets/libra.png"

  }




  if (currencySelect.value == "bitcoin") {
    currencyName.innerHTML = "Bitcoin"
    currencyImage.src = "./assets/bitcoin 1.png"

  }


  if (currencySelect.value == "real") {
    currencyName.innerHTML = "Real"
    currencyImage.src = "./assets/real.png"

  }





function changeCurrencyConvert(){
    
  const currencyNameSelect2 = document.querySelector("currency-name-select-2")
  const currencyImage2 = document.querySelector("currency-img-2")



  if (currencySelect2.value == "real-to") {
    currencyNameSelect2.innerHTML = "Real"
    currencyImage2.src = "./assets/real.png"
}

if (currencySelect2.value == "dolar-to") {
  currencyNameSelect2.innerHTML = "Real"
  currencyImage2.src = "./assets/dolar.png"
}

if (currencySelect2.value == "euro-to") {
  currencyNameSelect2.innerHTML = "Real"
  currencyImage2.src = "./assets/euro.png"
}





}



  convertValues()
}



currencyConvert.addEventListener("change", changeCurrencyConvert)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)