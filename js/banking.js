function textToValue(inputId) {
  const input = document.getElementById(inputId);
  const inputText = input.value;
  const inputValue = parseFloat(inputText);
  input.value = " ";
  return inputValue;
}
function updateBothField(status, inputValue) {
  const statusText = document.getElementById(status);
  const statusValue = parseFloat(statusText.innerText);
  statusText.innerText = statusValue + inputValue;
}
function updateBalance(bothinputValue, isAdd) {
  const balanceStatus = document.getElementById("balance-status");
  const balanceStatusValue = parseFloat(balanceStatus.innerText);
  if (isAdd == true) {
    balanceStatus.innerText = balanceStatusValue + bothinputValue;
  } else {
    balanceStatus.innerText = balanceStatusValue - bothinputValue;
  }
}
document.getElementById("deposit-btn").addEventListener("click", function () {
  const depositInputValue = textToValue("deposit");
  const errorMessage = document.getElementById("error");
  if (depositInputValue > 0) {
    updateBothField("deposit-status", depositInputValue);
    updateBalance(depositInputValue, true);
    errorMessage.innerText = " ";
  } else {
    errorMessage.innerText = "--- Please Enter a Positive number ---";
  }
});
document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawInputValue = textToValue("withdraw");
  const getCurrentBalance = document.getElementById("balance-status").innerText;
  const currentBalanceValue = parseFloat(getCurrentBalance);
  const errorMessage = document.getElementById("error");
  if (withdrawInputValue > 0 && currentBalanceValue > withdrawInputValue) {
    updateBothField("withdraw-status", withdrawInputValue);
    updateBalance(withdrawInputValue, false);
    errorMessage.innerText = " ";
  }
  if (currentBalanceValue < withdrawInputValue) {
    errorMessage.innerText = "You do not have sufficent funds to withdraw";
  } else {
    errorMessage.innerText =
      "--- Please Enter a Positive number & lower than your balance---";
  }
});
