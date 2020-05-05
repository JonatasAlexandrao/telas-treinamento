const attributes = (function() {

  const module = {}

  module._style = () => {
    const $head = document.querySelector('head')
    const $style = document.createElement('style')

    $style.textContent = `
    
      .atributos {
        float:left;
        width: 190px;
        height: 260px;
        margin-top: 12px;
        border: 2px solid #000;
        border-radius: 10px;
      }

      .atributos h2 {
        padding-top: 7px;
        font-size: 14px;
        text-align: center;
        text-transform: uppercase;

      }
    `
    $head.insertAdjacentElement('beforeend', $style)

  }

  module.render = () => {

    module._style()

    return `<div class="atributos"><h2>Atributos</h2></div>`
  }

  return {
    render: module.render
  }

})()