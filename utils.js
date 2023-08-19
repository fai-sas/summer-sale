function getElementValue(elementId) {
  const element = document.getElementById(elementId)
  const elementString = element.innerText
  const elementValue = parseFloat(elementString)
  return elementValue
}

function setNewValue(elementId, newValue) {
  const element = document.getElementById(elementId)
  element.innerText = newValue
  return element
}
