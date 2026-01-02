const rates = {
  USD: 1,
  EUR: 0.92,
  XOF: 600
};

function convert() {
  const amount = document.getElementById("amount").value;
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;

  const result = (amount / rates[from]) * rates[to];
  document.getElementById("result").textContent = result.toFixed(2);
}