
const getSingleMorse = (singleInput) => {
  switch (singleInput) {
    case "a":
      return ".-";
      break;
    case "b":
      return "-...";
      break;
    case "c":
      return "-.-.";
      break;
    case "d":
      return "-..";
      break;
    case "e":
      return ".";
      break;
    case "f":
      return "..-.";
      break;
    case "g":
      return "--.";
      break;
    case "h":
      return "....";
      break;
    case "i":
      return "..";
      break;
    case "j":
      return ".---";
      break;
    case "k":
      return "-.-";
      break;
    case "l":
      return ".-..";
      break;
    case "m":
      return "--";
      break;
    case "n":
      return "-.";
      break;
    case "o":
      return "---";
      break;
    case "p":
      return ".--.";
      break;
    case "q":
      return "--.-";
      break;
    case "r":
      return ".-.";
      break;
    case "s":
      return "...";
      break;
    case "t":
      return "-";
      break;
    case "u":
      return "..-";
      break;
    case "v":
      return "...-";
      break;
    case "w":
      return ".--";
      break;
    case "x":
      return "-..-";
      break;
    case "y":
      return "-.--";
      break;
    case "z":
      return "--..";
      break;
    case " ":
      return "/";
      break;
    case ".":
      return ".-.-.-";
      break;
    case "!":
      return "-.-.--";
      break;
    case "?":
      return "..--..";
      break;
    
    
    default:
      break;
  }
}

const getSingleLetter = (singleInput) => {
  switch (singleInput) {
    case ".-":
      return "a";
      break;
    case "-...":
      return "b";
      break;
    case "-.-.":
      return "c";
      break;
    case "-..":
      return "d";
      break;
    case ".":
      return "e";
      break;
    case "..-.":
      return "f";
      break;
    case "--.":
      return "g";
      break;
    case "....":
      return "h";
      break;
    case "..":
      return "i";
      break;
    case ".---":
      return "j";
      break;
    case "-.-":
      return "k";
      break;
    case ".-..":
      return "l";
      break;
    case "--":
      return "m";
      break;
    case "-.":
      return "n";
      break;
    case "---":
      return "o";
      break;
    case ".--.":
      return "p";
      break;
    case "--.-":
      return "q";
      break;
    case ".-.":
      return "r";
      break;
    case "...":
      return "s";
      break;
    case "-":
      return "t";
      break;
    case "..-":
      return "u";
      break;
    case "...-":
      return "v";
      break;
    case ".--":
      return "w";
      break;
    case "-..-":
      return "x";
      break;
    case "-.--":
      return "y";
      break;
    case "--..":
      return "z";
      break;
    case "/":
      return " ";
      break;
    case ".-.-.-":
      return ".";
      break;
    case "-.-.--":
      return "!";
      break;
    case "..--..":
      return "?";
      break;
    
    default:
      break;
  }
  
}



export const translateEnglishToMorse = (engString) => {
  const formattedEngString = engString.match(/[a-z\s]/gi).join("");
  const engArr = formattedEngString.toLowerCase().split("");
  const morseArr = engArr.map((singleLetter) => {
    return getSingleMorse(singleLetter) + " ";
  })
 
  const morseString = morseArr.join("");

  return morseString.trim();
}


export const translateMorseToEnglish = (morseString) => {
  const morseArr = morseString.split(" ");
  const engArr = morseArr.map((singleMorse) => {
    return getSingleLetter(singleMorse);
  })

  let engString = engArr.join("");

  if (engString.charAt(engString.length-1) == "." || engString.charAt(engString.length-1) == "!" || engString.charAt(engString.length-1) == "?") {
    engString = engString.charAt(0).toUpperCase() + engString.slice(1);
  }

  return engString.trim();
}