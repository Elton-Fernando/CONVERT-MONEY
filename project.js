const button = document.getElementById('convert-button') 
const select = document.getElementById('currency-select') 


const convertValues = async () => { 
   const inputReais = document.getElementById('input-real').value  
   const realValueText = document.getElementById('real-value-text') 
   const currencyValueText = document.getElementById('currency-value-text')
   
   const data = await fetch(" https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then( response => response.json())
  
   const dolar = data.USDBRL.high 
   const euro = data.EURBRL.high 

   realValueText.innerHTML = new Intl.NumberFormat("pt-BR",{ 
    style: "currency",
    currency: "BRL",                  
 }).format(inputReais);                
  
   if(select.value ==="US$ Dólar americano"){ 
   currencyValueText.innerHTML = new Intl.NumberFormat("en-US",{ 
      style: "currency",
      currency: "USD",                    
   }).format(inputReais / dolar)
   }                                   
   
   if(select.value ==="€ Euro"){                                  
   currencyValueText.innerHTML = new Intl.NumberFormat("de-DE",{ // 13-
   style: "currency",
   currency: "EUR",                   
}).format(inputReais / euro)
}};                                    

changeCurrency = () => {                                       
  const currencyName = document.getElementById("currency-name") 
  const currencyImg = document.getElementById('currency-img') 

  if (select.value === 'US$ Dólar americano'){ 
    currencyName.innerHTML = "Dólar Americano" 
    currencyImg.src = "./imagem.projeto/estados-unidos (1) 1.svg "
 }                

    if (select.value === '€ Euro'){ 
       currencyName.innerHTML = "Euro"
       currencyImg.src = "./imagem.projeto/Design sem nome 1.svg "
    }               
    convertValues() 
   }

button.addEventListener('click', convertValues)  
select.addEventListener('change', changeCurrency) 
