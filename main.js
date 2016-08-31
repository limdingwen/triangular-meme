function _generateMeme(first, second) {
  var meme = "";
  var i;
  
  for (i = first.length; i > 0; i--) {
    meme += first.substring(0, i) + "\n";
  }
  
  for (i = 1; i <= second.length; i++) {
    meme += second.substring(0, i) + "\n";
  }
  
  return meme;
}

function generateMeme() {
  document.querySelector("#result").value = _generateMeme(
    document.querySelector("#first").value,
    document.querySelector("#second").value);
}

document.querySelector("#first").addEventListener("input", generateMeme);
document.querySelector("#second").addEventListener("input", generateMeme);

generateMeme();