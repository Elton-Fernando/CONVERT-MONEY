const button = document.getElementById('convert-button') // 0- INTERLIGAR O BOTÃO CALCULAR
const select = document.getElementById('currency-select') // 6- INTERLIGANDO A OPÇAO EURO
// aqui eu estou buscando o botão ID do button CONVERTER
// só que pra isso eu tive que criar uma classe ID no button
const dolar = 5.50 // 0,5- CRIAR UM VALOR PARA O DOLAR
const euro = 5.90 // 0,5- ----------//-------- O EURO

const convertValues = () => {   // colocar o .VALUE para mostrar apenas o valor digitado no input
   const inputReais = document.getElementById('input-real').value  // 1- ACESSAR O VALOR QUE MOSTRA NE TELA
   const realValueText = document.getElementById('real-value-text') // 2- MOSTRAR VALOR DIGITADO NO "VALOR", QUANDO CLICADO
   const currencyValueText = document.getElementById('currency-value-text') // 3- PARA MOSTRAR MEU RESULTADO NO VALOR DOLAR
  
   
   realValueText.innerHTML = new Intl.NumberFormat("pt-BR",{ // 4-
    style: "currency",
    currency: "BRL",                   // 4- TODO ESSES COD: PARA COLOCAR A SIGLA E O VALOR NA IMAGEM VALOR R$10.000,00
 }).format(inputReais);                // 4-
  
   if(select.value ==="US$ Dólar americano"){ // 14- AQUI É PARA MUDAR DE DOLAR PARA EURO QUANDO SELECIONADO
   currencyValueText.innerHTML = new Intl.NumberFormat("en-US",{ // 5-
      style: "currency",
      currency: "USD",                   // 5- TODO ESSES COD: PARA COLOCAR A SIGLA E O VALOR EM DOLAR NO VALOR DOLAR $1.818,18 
   }).format(inputReais / dolar)
   }                                   // 5-
   
   if(select.value ==="€ Euro"){   // 15- AQUI É PARA MUDAR DE EURO PARA DOLAR QUANDO SELECIONADO                                
   currencyValueText.innerHTML = new Intl.NumberFormat("de-DE",{ // 13-
   style: "currency",
   currency: "EUR",                   // 13- TODO ESSES COD: PARA COLOCAR A SIGLA E O VALOR NA IMAGEM VALOR € 10.000,00
}).format(inputReais / euro)
}};                                     // 13-

changeCurrency = () => {                                       // 8 - CRIANDO UM ACESSO AO VALOR EURO
  const currencyName = document.getElementById("currency-name") // 8 -
  const currencyImg = document.getElementById('currency-img') // 10 - CRIANDO UM ACESSO ATÉ A IMAGEM DA PAGINA

  if (select.value === 'US$ Dólar americano'){ // 12- SE MEU SELECT FOR IGUAL A US$ Dólar americano, que é o resultado que sai quando selecionado
    currencyName.innerHTML = "Dólar Americano" // 12.3 - ELE VAI MUDAR PARA "Dólar" MA PAGINA EMBAIXO DA IMAGEM
    currencyImg.src = "./imagem.projeto/estados-unidos (1) 1.svg " // 12.6 - TROCANDO A IMG DE EURO P/ DOLAR QUANDO SELECIONADA
 }                 // ESSE É O NOME DA IMAGEM NA PASTA DE IMG

    if (select.value === '€ Euro'){ // 9- SE MEU SELECT FOR IGUAL A € Euro, que é o resultado que sai quando selecionado
       currencyName.innerHTML = "Euro" // 9.5 - ELE VAI MUDAR PARA "Euro" MA PAGINA EMBAIXO DA IMAGEM
       currencyImg.src = "./imagem.projeto/Design sem nome 1.svg " // 11 - TROCANDO A IMG DE DOLAR P/ EURO QUANDO SELECIONADA
    }                // ESSE É O NOME DA IMAGEM NA PASTA DE IMG
    convertValues() // 16- ISTO É PARA ALTERAR OS RESULTADOS SOZINHO ASSIM Q TROCAR DE EURO P/ DOLAR
   }

button.addEventListener('click', convertValues)  // 1.5 - AQUI ELE VAI OUVIR TODA VEZ QUE O BOTÃO FOR CLICADO
select.addEventListener('change', changeCurrency) // 7 - AQUI ELE ACESSA QUANDO SELECIONA A OPÇÃO EURO
// chamando minha função criada acima
