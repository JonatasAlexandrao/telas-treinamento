const combat = (function() {

  const module = {}

  module._style = () => {
    const $head = document.querySelector('head')
    const $style = document.createElement('style')

    $style.textContent = `
      .combate {
        position: relative;
        
        height: 90px;
        top: 7px;

        border: 2px solid #000;
        border-radius: 10px;
        
      }
      .combate h2 {
        padding-top: 7px;
        font-size: 14px;
        text-align: center;
        text-transform: uppercase;
      }
    `
    $head.insertAdjacentElement('beforeend', $style)
  }

  module._esquiva = () => {
    const $esquivar = singleAttribute.render({atrib: 'esquivar'})

    const $head = document.querySelector('head')
    const $style = document.createElement('style')

    $style.textContent = `
      
    
    `
    $head.insertAdjacentElement('beforeend', $style)

    return $esquivar
  }

  module.render = () => {
    module._style()

    

    return `
    <div class="combate">
      <h2>Combate</h2>
      ${module._esquiva()}
    </div>`
  }

  return {
    render: module.render
  }

})()