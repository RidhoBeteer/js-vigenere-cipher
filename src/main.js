var key, plain, i;
var j = 0;
var cipher = "";
var unicodeCipher;

// String.fromCharCode(n) & var.charCodeAt(n);

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