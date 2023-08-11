// Select method
var btnContainer = document.getElementById("method");
var btns = btnContainer.getElementsByClassName("btn--method");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("selected");
      current[0].className = current[0].className.replace(" selected", "");
      this.className += " selected";
    });
  }

// Btns
const btnEncrypt = document.querySelector('#encrypt');
const btnDecrypt = document.querySelector('#decrypt');
const key = document.querySelector('#key');


const listLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']









function encryptfunc() {
    const textarea = document.querySelector('#text');
    const secondtextarea = document.querySelector('#second-text');
    const keyValue = Number(key.value);
    
    if ( document.querySelector(".selected.cesar")){
        for (const letter of textarea.value) {
            if (!listLetters.includes(letter)) {
                newText += letter
                secondtextarea.value = newText;
                continue
            }

            const indexLetter = listLetters.findIndex((item) => item === letter)
            let indexNewLetter = indexLetter + keyValue

            if(indexNewLetter > 51) {
                indexNewLetter -= 52;
            }
            newText += listLetters[indexNewLetter];
            secondtextarea.value = newText;
        }
        newText = '';
    } else {       
      
        var encrypted = CryptoJS.AES.encrypt(textarea.value, key.value).toString();
        secondtextarea.value = encrypted
        };
    
}
function decryptfunc() {
    const textarea = document.querySelector('#text');
    const secondtextarea = document.querySelector('#second-text');
    const keyValue = Number(key.value);

    if ( document.querySelector(".selected.cesar")){
        for (const letter of textarea.value) {
            if (!listLetters.includes(letter)) {
                newText += letter
                secondtextarea.value = newText;
                continue
            }

            const indexLetter = listLetters.findIndex((item) => item === letter)
            let indexNewLetter = indexLetter - keyValue

            if(indexNewLetter < 0) {
                indexNewLetter += 52;
            }
            newText += listLetters[indexNewLetter];
            secondtextarea.value = newText;
        }
        newText = '';
    } else {
        var encrypted = CryptoJS.AES.decrypt(textarea.value, key.value).toString(CryptoJS.enc.Utf8);
        secondtextarea.value = encrypted
        };
    
    
}

btnEncrypt.addEventListener('click', encryptfunc())
btnDecrypt.addEventListener('click', decryptfunc())

