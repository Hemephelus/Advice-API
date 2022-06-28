const adviceslip =  'https://api.adviceslip.com/advice'


async function getText(file) {
    let adviceApi = await fetch(file);
    let AdviceApiText = await adviceApi.text();
   let getJsonFormat = JSON.parse(AdviceApiText)
    let adviceId = getJsonFormat.slip.id
    let mainAdvice = getJsonFormat.slip.advice
  }

