(function() {

  const $sheet = document.querySelector('#sheet')

  const $detalhesPessoais = detalhesPessoais.render()
  const $profile = profile.render()

  $sheet.insertAdjacentHTML('beforeend', $detalhesPessoais)
  $sheet.insertAdjacentHTML('beforeend', $profile)

})()