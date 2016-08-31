function _generateMeme(first, second) {
  var meme = "";
  var i;

  var bouncedIndex = 0;

  for (var count = 0; count < first.length < second.length ? first.length : second.length; count++) {
    console.log("Identical Index Count: " + count);
    if (first[count] == second[count])
      bouncedIndex = count;
    else
      break;
  }

  if (first != second) {
    for (i = first.length; i > bouncedIndex + 1; i--) {
      meme += first.substring(0, i) + "\n";
      console.log("First Index Count: " + i);
    }

    for (i = bouncedIndex + 2; i <= second.length; i++) {
      meme += second.substring(0, i) + "\n";
      console.log("Second Index Count: " + i);
    }
  } else
    return first;

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
