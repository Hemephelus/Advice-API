
const diceButton = document.querySelector('button')
const adviceId = document.querySelector('#adviceId')
const mainAdvice = document.querySelector('#mainAdvice')

diceButton.onclick = getText

async function getText() {
    const adviceslip =  'https://api.adviceslip.com/advice'
    let adviceApi = await fetch(adviceslip);
    let AdviceApiText = await adviceApi.text();
   let getJsonFormat = JSON.parse(AdviceApiText)
 adviceId.textContent = getJsonFormat.slip.id
 mainAdvice.textContent = "\""+getJsonFormat.slip.advice+"\""
  }

 