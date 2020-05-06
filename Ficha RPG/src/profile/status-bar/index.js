const statusBar = (function() {

  const module = {}

  module._style = () => {

    const $head = document.querySelector('head')
    const $style = document.createElement('style')

    $style.textContent = `

    .barra {
      width: 180px;
      height: 28px;
      background-color: #7e4848;
      color: #fff
    }
    .barra h3 {
      position: absolute;
    }

    
      
    `
    $head.insertAdjacentElement('beforeend', $style)
  }

  module.render = (type) => {
    module._style()
    return `
    <div class="barra"><h3> ${type + "9/13"}</h3></div>
    `
  }

  return {
    render: module.render
  }

})()