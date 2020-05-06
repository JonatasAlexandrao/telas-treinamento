(function() {

  const $sheet = document.querySelector('#sheet')

  const $personalDetails = personalDetails.render()
  const $profile = profile.render()
  const $attributes = attributes.render()
  const $weapons = weapons.render()

  $sheet.insertAdjacentHTML('beforeend', $personalDetails)
  $sheet.insertAdjacentHTML('beforeend', $profile)
  $sheet.insertAdjacentHTML('beforeend', $attributes)
  $sheet.insertAdjacentHTML('beforeend', $weapons)

})()