const popupPersonalDetails = (function(){

  const module = {}

  module._style = (display) => {
    const $head = document.querySelector('head')
    const $style = document.createElement('style')

    $style.textContent = `
    .camada-transparente{
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0, .5);
      position: absolute;
      z-index: 99;
    }
    .popupDetalhes {
      width: 300px;
      height: 340px;
      position: fixed;
      background-color: #000;
      
      left: 50%;
      top: 50%;
      transform: translateY(-50%) translateX(-50%);

      z-index: 100;
    }
    .barra-cabecalho {
      width: 100%;
      height: 10%;
      background-color: grey;
      position: absolute;
      z-index: 98;
    }
    .btnFechar {
      width: 15%;
      height: 100%;
      background-color: red;
      position: absolute;
      right: 0;
    }
    .camada-transparente.-disabel{
      display:none;
    }
    `

    $head.insertAdjacentElement('beforeend', $style)
  }

  module.habilitarDesabilitar = () => {

   const $popupDetalhes = document.querySelector('.camada-transparente')
   $popupDetalhes.classList.toggle('-disabel')
  }

  module.render = () => {
    module._style()
    return `
    <div class="camada-transparente -disabel">
      <div class="popupDetalhes">
        <div class="barra-cabecalho">
        <div class="btnFechar" onClick="popupPersonalDetails.habilitarDesabilitar()"></div>
        </div>
      </div>
    </div>
    `
  }

  return {
    render: module.render,
    habilitarDesabilitar: module.habilitarDesabilitar
  }

})()