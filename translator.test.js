import {translateEnglishToMorse, translateMorseToEnglish} from "./translator.js"

describe('Test English to Morse', () => {
  it('Should translate a to .-', () => {
    expect(translateEnglishToMorse("a")).toBe(".-");
  })
  it('Should translate hello to .... . .-.. .-.. ---', () => {
      expect(translateEnglishToMorse("hello")).toBe(".... . .-.. .-.. ---");
  })
  it('Should translate how are you', () => {
      expect(translateEnglishToMorse("how are you")).toBe(".... --- .-- / .- .-. . / -.-- --- ..-");
  })
  it('Should translate capitals: HELLO to .... . .-.. .-.. ---', () => {
    expect(translateEnglishToMorse("HELLO")).toBe(".... . .-.. .-.. ---");
})
})


describe('Test Morse to English', () => {
  it('Should translate a to .-', () => {
    expect(translateMorseToEnglish(".-")).toBe("a");
  })
  it('Should translate hello to .... . .-.. .-.. ---', () => {
      expect(translateMorseToEnglish(".... . .-.. .-.. ---")).toBe("hello");
  })
  it('Should translate hello to .... . .-.. .-.. ---', () => {
    expect(translateMorseToEnglish(".... --- .-- / .- .-. . / -.-- --- ..-")).toBe("how are you");
})
})