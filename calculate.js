let totalPrice = 0

function handleClick(target) {
  const priceDiv = document.getElementById('calculation-entry')
  const purchaseBtn = document.getElementById('purchase-btn')

  let count = priceDiv.childElementCount

  const productName = target.childNodes[3].childNodes[2].nextSibling.innerText

  const productDiv = document.createElement('div')

  productDiv.innerHTML = `
  <div class='flex items-center gap-4 font-semibold';>
  <p>${count + 1}</p>
  <li class='py-2 list-none'>${productName}</li>
  </div>
  `
  priceDiv.appendChild(productDiv)

  const productPriceString =
    target.childNodes[3].childNodes[5].innerText.split(' ')[0]

  totalPrice = parseFloat(totalPrice) + parseFloat(productPriceString)

  setNewValue('total-price', totalPrice)

  if (totalPrice > 0) {
    purchaseBtn.removeAttribute('disabled')
  }
}

const couponCode = document.getElementById('coupon-code')
const couponBtn = document.getElementById('coupon-btn')

couponCode.addEventListener('keyup', function (event) {
  const couponCodValue = event.target.value

  if (couponCodValue === 'SELL20') {
    couponBtn.removeAttribute('disabled')
  } else {
    couponBtn.setAttribute('disabled', true)
  }
})

couponBtn.addEventListener('click', function () {
  const totalPriceDiv = getElementValue('total-price')
  const discountValue = totalPriceDiv * 0.2
  setNewValue('discount-amount', discountValue)

  const totalDiscountValue = getElementValue('discount-amount')

  const finalPrice = totalPriceDiv - totalDiscountValue

  setNewValue('final-price', finalPrice)

  couponCode.value = ''
  couponBtn.setAttribute('disabled', true)
})

function goHome() {
  location.href = 'index.html'
}
