const statusBar = (function() {

  const module = {}

  module.style = () => {

    const $head = document.querySelector('head')
    const $style = document.createElement('style')

    $style.textContent = `

    .barra {
      width: 180px;
      height: 28px;
      background-color: #7a7a7a;
      color: #fff;

      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto 6px;
    }
    .barra h3 {
      position: absolute;
      font-size: 14px;
      text-transform: uppercase;
      z-index: 100;
    }
    .barra-vida, .barra-sanidade {
      height: 28px;     
      position: absolute;
      left:0;
    }

    .barra-vida {
      width: 140px;
      background-color: #830403;
    }
    .barra-sanidade {
      width: 120px;
      background-color: #0b387c;
    }
    
      
    `
    $head.insertAdjacentElement('beforeend', $style)
  }

  module.render = (type, classe) => {
    return `
    <div class="barra">
      <h3> ${type + "9/13"}</h3>
      <div class="${classe}"></div>
    </div>
    `
  }

  return {
    render: module.render,
    style: module.style
  }

})()