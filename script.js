import {translateEnglishToMorse, translateMorseToEnglish} from "./translator.js";

document.querySelector('.btn').addEventListener("click", () => {
  if (document.querySelector('#etm').checked) {
    const string = document.querySelector('.input').value;
    let output = translateEnglishToMorse(string);
    if (output.includes("undefined")) {
      output = "Please translate correct English letters!";
    }

    document.querySelector('.output').textContent = output;

  } else {
    const string = document.querySelector('.input').value;
    let output = translateMorseToEnglish(string)
    if (output == "" || !(typeof output == "string")) {
      output = "Please translate correct Morse Code!";
    }
    document.querySelector('.output').textContent = output;
  }
  
});


document.querySelector('#mte').addEventListener("click", () => {
  const input = document.querySelector('.input');
  const output = document.querySelector('.output');
  if (input.value.match(/[a-z]/ig)) {
    const prevInput = input.value;
    const prevOutput = output.textContent;

    input.value = prevOutput;
    output.textContent = prevInput;
  }
})


document.querySelector('#etm').addEventListener("click", () => {
  const input = document.querySelector('.input');
  const output = document.querySelector('.output');
  if (output.textContent.match(/[a-z]/ig)) {
    const prevInput = input.value;
    const prevOutput = output.textContent;

    input.value = prevOutput;
    output.textContent = prevInput;
  }
})
