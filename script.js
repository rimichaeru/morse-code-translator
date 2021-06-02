import {translateEnglishToMorse, translateMorseToEnglish} from "./translator.js";

document.querySelector("#translate").addEventListener("click", () => {
  if (document.querySelector("#etm").checked) {
    const string = document.querySelector(".input").value;
    let output = translateEnglishToMorse(string);
    if (output.includes("undefined")) {
      output = "";
      document.querySelector(".output").placeholder = "Please translate correct English letters!";
    }
    
    document.querySelector(".output").textContent = output;

    // TTS
    if (document.querySelector("#speech-checkbox").checked) {
      const speech = new SpeechSynthesisUtterance();
      speech.text = String(string);
      window.speechSynthesis.speak(speech);
    }

  } else {
    const string = document.querySelector(".input").value;
    let output = translateMorseToEnglish(string);
    if (output == "" || !(typeof output == "string")) {
      output = "";
      document.querySelector(".output").placeholder = "Please translate correct Morse Code!";
      
    }
    document.querySelector(".output").textContent = output;

    // TTS
    if (document.querySelector("#speech-checkbox").checked) {
      const speech = new SpeechSynthesisUtterance();
      speech.text = String(output);
      window.speechSynthesis.speak(speech);
    }
  }

  
});

document.querySelector("#clear").addEventListener("click", () => {
  document.querySelector(".input").value = "";
});



document.querySelector("#mte").addEventListener("click", () => {
  document.querySelector(".input").placeholder = "Enter your dots and dashes to translate here!";
  const input = document.querySelector(".input");
  const output = document.querySelector(".output");
  if (input.value.match(/[a-z]/ig)) {
    const prevInput = input.value;
    const prevOutput = output.textContent;

    input.value = prevOutput;
    output.textContent = prevInput;
  }
})


document.querySelector("#etm").addEventListener("click", () => {
  document.querySelector(".input").placeholder = "Enter your words to translate here!";
  const input = document.querySelector(".input");
  const output = document.querySelector(".output");
  if (output.textContent.match(/[a-z]/ig)) {
    const prevInput = input.value;
    const prevOutput = output.textContent;

    input.value = prevOutput;
    output.textContent = prevInput;
  }
})


document.querySelector(".speak").addEventListener("click", () => {
  const speech = new SpeechSynthesisUtterance();
  speech.text = String(document.querySelector(".output").textContent);
  window.speechSynthesis.speak(speech);
});
