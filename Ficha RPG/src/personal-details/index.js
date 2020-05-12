const personalDetails = (function() {

  const module = {}

  module._style = () => {

    const $head = document.querySelector('head')
    const $style = document.createElement('style')

    $style.textContent = `
      .detalhes {
        float: left;

        width: 190px;
        height: 150px;
        margin-top: 12px;

        border-radius: 10px;
        border: 2px solid #000;
      }
      
      .detalhes h2 {
        padding-top: 7px;
        font-size: 14px;
        text-align: center;
        text-transform: uppercase;

      }

    `
    $head.insertAdjacentElement('beforeend', $style)
  }

  module.doubleClick = () => {
    
  }

  module.render = () => {

    module._style()

    return `<div class="detalhes"><h2>Detalhes Pessoais</h2></div>`
  }

  return {
    render: module.render
  }

})()