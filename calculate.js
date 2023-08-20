let totalPrice = 0

function handleClick(target) {
  const priceDiv = document.getElementById('calculation-entry')
  const purchaseBtn = document.getElementById('purchase-btn')

  let count = priceDiv.childElementCount

  const productName = target.childNodes[3].childNodes[2].nextSibling.innerText

  const productDiv = document.createElement('div')

  productDiv.innerHTML = `
  <div class='flex items-center gap-2 text-2xl font-semibold px-8 py-2 '>
  <p>${count + 1}. </p>
  <li class='py-2 list-none'>${productName}</li>
  </div>
  `
  priceDiv.appendChild(productDiv)

  const productPriceString =
    target.childNodes[3].childNodes[5].innerText.split(' ')[0]

  totalPrice = parseFloat(totalPrice) + parseFloat(productPriceString)
  totalPriceTwoDecimal = totalPrice.toFixed(2)

  setNewValue('total-price', totalPriceTwoDecimal)

  const couponBtn = document.getElementById('coupon-btn')

  if (totalPrice > 0) {
    purchaseBtn.removeAttribute('disabled')
  }
  if (totalPrice >= 200) {
    couponBtn.removeAttribute('disabled')
  }
}

const couponCode = document.getElementById('coupon-code')
const couponBtn = document.getElementById('coupon-btn')

couponCode.addEventListener('keyup', function (event) {
  const couponCodValue = event.target.value

  // if (couponCodValue === 'SELL200') {
  //   couponBtn.removeAttribute('disabled')
  // } else {
  //   couponBtn.setAttribute('disabled', true)
  // }
})

couponBtn.addEventListener('click', function () {
  const totalPriceDiv = getElementValue('total-price')
  const discountValue = totalPriceDiv * 0.2
  const discountValueTwoDecimal = discountValue.toFixed(2)
  const couponCodeValue = document.getElementById('coupon-code').value

  if (totalPriceDiv >= 200 && couponCodeValue === 'SELL200') {
    setNewValue('discount-amount', discountValueTwoDecimal)
  } else {
    alert('wrong coupon code applied')
  }

  const totalDiscountValue = getElementValue('discount-amount')

  const finalPrice = totalPriceDiv - totalDiscountValue

  const finalPriceTwoDecimal = finalPrice.toFixed(2)

  setNewValue('final-price', finalPriceTwoDecimal)

  couponCode.value = ''
  // couponBtn.setAttribute('disabled', true)
})

function goHome() {
  location.href = 'index.html'
}
