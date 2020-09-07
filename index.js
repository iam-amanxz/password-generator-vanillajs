const iptPwEl = document.getElementById("ipt_pw");
const pwCopyEl = document.getElementById("pw_copy");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const lenRangeEl = document.getElementById("len-range");
const lenNumEl = document.getElementById("len-num");
const btnGenEl = document.getElementById("btn_generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=?/.<>,;:'|[]{}";

function onLengthChange(e) {
  const { value } = e.target;
  lenRangeEl.value = value;
  lenNumEl.value = value;
}

lenRangeEl.addEventListener("input", onLengthChange);
lenNumEl.addEventListener("input", onLengthChange);

function getLowercase() {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUppercase() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
  const len = lenNumEl.value;

  let password = "";

  if (upperEl.checked) {
    password += getUppercase();
  }

  if (lowerEl.checked) {
    password += getLowercase();
  }

  if (numberEl.checked) {
    password += getNumber();
  }

  if (symbolEl.checked) {
    password += getSymbol();
  }

  for (let i = password.length; i < len; i++) {
    const x = generateX();
    password += x;
  }

  iptPwEl.value = password;
}

function generateX() {
  const xs = [];
  if (upperEl.checked) {
    xs.push(getUppercase());
  }

  if (lowerEl.checked) {
    xs.push(getLowercase());
  }

  if (numberEl.checked) {
    xs.push(getNumber());
  }

  if (symbolEl.checked) {
    xs.push(getSymbol());
  }

  if (xs.length === 0) return "";

  return xs[Math.floor(Math.random() * xs.length)];
}

btnGenEl.addEventListener("click", generatePassword);

pwCopyEl.addEventListener("click", () => {
  const password = iptPwEl.value;
  if (!password) {
    return;
  }
  navigator.clipboard.writeText(password).then(
    function () {
      alert("Password copied to clipboard");
    },
    function () {
      /* clipboard write failed */
    }
  );
});
