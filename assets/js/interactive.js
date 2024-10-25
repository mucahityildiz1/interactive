rangeInput.addEventListener('input', handleInputChange);
billingType.addEventListener('click', changeBillingType);

let billingTypeValue = false;

function handleInputChange() {
  console.log(rangeInput.value);
  if (billingTypeValue) {
    pricing.innerText = Number(rangeInput.value) * 12;
    pageViews.innerText = Number(rangeInput.value * 6.25) * 12;
  } else {
    pricing.innerText = rangeInput.value;
    pageViews.innerText = rangeInput.value * 6.25;
  }
}

function changeBillingType() {
  billingTypeValue = !billingTypeValue;
  changePricing();
}

function changePricing() {
  if (billingTypeValue) {
    pricing.innerText = (Number(rangeInput.value) * 0.75) * 12;
    billingPeriod.innerText = "year";
    pageViews.innerText = Number(rangeInput.value * 6.25) * 12;
  } else {
    pricing.innerText = rangeInput.value;
    billingPeriod.innerText = "month";
    pageViews.innerText = rangeInput.value * 6.25;
  }
}
