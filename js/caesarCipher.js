function caesarCipher(string, shift_amount) {
  let output = '';
  for (let i = 0; i < string.length; ++i) {
    let add = string[i];
    if ((string[i] >= 'a') && (string[i] <= 'z')) {
      let int_rep = string[i].charCodeAt(0);
      let new_int_rep = int_rep + shift_amount;
      if (new_int_rep < 97) {
        let diff = 97 - new_int_rep;
        new_int_rep = 123 - diff;
      }
      else if (new_int_rep > 122) {
        let diff = new_int_rep - 122;
        new_int_rep = diff + 96;
      }
      add = String.fromCharCode(new_int_rep);
    }
    else if ((string[i] >= 'A') && (string[i] <= 'Z')){
      let int_rep = string[i].charCodeAt(0);
      let new_int_rep = int_rep + shift_amount;
      if (new_int_rep < 65) {
        let diff = 65 - new_int_rep;
        new_int_rep = 91 - diff
      }
      else if (new_int_rep > 90) {
        let diff = new_int_rep - 90;
        new_int_rep = diff + 64;
      }
      add = String.fromCharCode(new_int_rep);
    }
    output += add;
  }
  return output;
};

module.exports = caesarCipher;