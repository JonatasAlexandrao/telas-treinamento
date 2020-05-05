(function() {

  const $sheet = document.querySelector('#sheet')

  const $detalhesPessoais = detalhesPessoais.render()
  const $profile = profile.render()
  const $attributes = attributes.render()
  const $weapons = weapons.render()

  $sheet.insertAdjacentHTML('beforeend', $detalhesPessoais)
  $sheet.insertAdjacentHTML('beforeend', $profile)
  $sheet.insertAdjacentHTML('beforeend', $attributes)
  $sheet.insertAdjacentHTML('beforeend', $weapons)

})()