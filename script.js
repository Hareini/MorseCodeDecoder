const morseCodeMap = {
  '.-': 'A', '-...': 'B', '-.-.': 'C',
  '-..': 'D', '.': 'E', '..-.': 'F',
  '--.': 'G', '....': 'H', '..': 'I',
  '.---': 'J', '-.-': 'K', '.-..': 'L',
  '--': 'M', '-.': 'N', '---': 'O',
  '.--.': 'P', '--.-': 'Q', '.-.': 'R',
  '...': 'S', '-': 'T', '..-': 'U',
  '...-': 'V', '.--': 'W', '-..-': 'X',
  '-.--': 'Y', '--..': 'Z',
  '-----': '0', '.----': '1', '..---': '2',
  '...--': '3', '....-': '4', '.....': '5',
  '-....': '6', '--...': '7', '---..': '8',
  '----.': '9',
  '--..--': ',', '.-.-.-': '.', '..--..': '?',
  '-.-.--': '!', '/': ' '
};

function decodeMorse() {
  const input = document.getElementById("morseInput").value.trim();
  const words = input.split(" / ");
  let decoded = "";

  words.forEach(word => {
    const chars = word.split(" ");
    chars.forEach(char => {
      decoded += morseCodeMap[char] || '?';
    });
    decoded += " ";
  });

  document.getElementById("outputText").textContent = decoded.trim();
}
