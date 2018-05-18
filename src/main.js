var key, plain = "", i;
var j = 0;
var cipher = "";
var unicodeCipher;

// String.fromCharCode(n) & var.charCodeAt(n);
// Encrypt
function capture() {

  key = document.getElementById('key').value.toUpperCase();
  plain = document.getElementById('plain').value.toUpperCase();
  
  
  encrypt(plain, key);
}

function encrypt(plain, key) {
  
  var max = key.length;
  
  for(i = 0; i < plain.length; i++) {
    var c = plain.charAt(i);
    var unicodeChar = c.charCodeAt(0);
    
    if(j >= max) {
      j = 0;
    }
    
    if(unicodeChar == 32) {
      cipher += " "
    }else if(unicodeChar > 65 || unicodeChar < 90) {
      unicodeCipher = (unicodeChar + key.charCodeAt(j))%26 + 65;
      cipher += String.fromCharCode(unicodeCipher);
    }

    j++;
  }
  document.getElementById('cipherInput').value = cipher.toLowerCase();
}

//Decrypt

function getCipher() {
  key = document.getElementById('key').value.toUpperCase();
  cipher = document.getElementById('cipher').value.toUpperCase();

  decrypt(cipher, key);
}

function decrypt(cipher, key) {
  var max = key.length;

  for(i = 0; i < cipher.length; i++) {
    var c = cipher.charAt(i);
    var unicodeCipher = c.charCodeAt(0);

    if(j >= max) {
      j = 0;
    }

    if(unicodeCipher == 32) {
      plain += "";
    } else if(unicodeCipher > 65 || unicodeCipher < 90) {
      unicodeChar = (unicodeCipher - key.charCodeAt(j))%26 + 65;
      if(unicodeChar < 65) {
        unicodeChar += 26;
      }
      plain += String.fromCharCode(unicodeChar);
    }

    j++;
  }

  document.getElementById('plain').value = plain.toLowerCase();
}