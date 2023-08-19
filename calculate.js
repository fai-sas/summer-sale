let totalPrice = 0

function handleClick(target) {
  const priceDiv = document.getElementById('calculation-entry')
  const totalPriceDiv = document.getElementById('total-price')

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
  console.log(totalPrice)

  totalPriceDiv.innerText = totalPrice

  console.log(productName)
}
