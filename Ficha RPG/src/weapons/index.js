const weapons = (function() {

  const module = {}

  module._style = () => {
    const $head = document.querySelector('head')
    const $style = document.createElement('style')

    $style.textContent = `
      .armas {
        float: left;
        width: 400px;
        height: 155px;
        margin-top: 10px;
        border: 2px solid #000;
      }
      .armas h2 {
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
    return `<div class="armas"><h2>Armas</h2></div>`
  }

  return {
    render: module.render
  }

})()