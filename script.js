const textarea = document.querySelector('textarea');
const btnTranslate = document.querySelector('#btn-translate');
const outputDiv = document.querySelector("#translate-output");

function translateText(){
    let inputText = textarea.value;
    const url="https://api.funtranslations.com/translate/chef.json?text="
    

    
    fetch(url+inputText)
    .then(response => response.json())
    .then(json => outputDiv.textContent = json.contents.translated)
    .catch(()=> {outputDiv.textContent = "Sorry! we're experiencing some technical issue. Please try again later."});
}


btnTranslate.addEventListener("click", translateText);
