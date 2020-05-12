(function() {

  const $sheet = document.querySelector('#sheet')

  const $personalDetails = personalDetails.render()
  const $profile = profile.render()
  const $attributesContainer = attributesContainer.render()
  const $weapons = weapons.render()

  

  $sheet.insertAdjacentHTML('beforeend', $personalDetails)
  $sheet.insertAdjacentHTML('beforeend', $profile)
  $sheet.insertAdjacentHTML('beforeend', $attributesContainer)
  $sheet.insertAdjacentHTML('beforeend', $weapons)

  const $popupPersonalDetails = popupPersonalDetails.render()
  $sheet.insertAdjacentHTML('beforebegin', $popupPersonalDetails)


  const $detalhes = document.querySelector('.detalhes')

  $detalhes.addEventListener('dblclick', () => {   
    popupPersonalDetails.habilitarDesabilitar()
  })

})()