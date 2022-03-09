function updateRate() {
  var rateval = document.getElementById('rate').value;
  document.getElementById('rate_val').innerText = rateval;
}

function compute() {
  var principal = document.getElementById('principal').value;
  if ((principal <= 0) | (principal == '')) {
    alert('Vous devez entrez un nombre positive');
    document.getElementById('principal').focus();
  } else {
    var rate = document.getElementById('rate').value;
    var years = document.getElementById('years').value;
    var interest = (principal * years * rate) / 100;
    var year = new Date().getFullYear() + parseInt(years);
    document.getElementById('result').innerHTML =
      "If you deposit <u class='cl'>" +
      principal +
      "</u>,<br>at an interest rate of <u class='cl'>" +
      rate +
      "%</u><br>You will receive an amount of <u class='cl'>" +
      interest +
      "</u>,<br>in the year <u class='cl'>" +
      year +
      '</u><br>';
  }
}
