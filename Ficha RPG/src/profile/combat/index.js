const combat = (function() {

  const module = {}

  module._style = () => {
    const $head = document.querySelector('head')
    const $style = document.createElement('style')

    $style.textContent = `
      .combate {
        position: relative;
        float: left;
        width: 200px;
        height: 95px;
        bottom: -8px;

        /*margin-top: 10px;*/
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

  module.render = () => {
    module._style()
    return `<div class="combate"><h2>Combate</h2></div>`
  }

  return {
    render: module.render
  }

})()