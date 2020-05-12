const singleAttribute = (function() {

  const module = {}

  module.style = () => {
    const $head = document.querySelector('head')
    const $style = document.createElement('style')

    $style.textContent = `
      .atributo-simples {
        width: 80px;
        height: 34px;
      
        position: relative;
        display: inline-block;
        padding: 4px 2px 0 6px;
        
      }
      
      .atributo-simples > label {
        font-size: 18px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        text-transform: uppercase;
        
      }
            
      .quadrado-principal {
        background-color: rgba(128, 128, 128, .5);
        width: 43.8px;
        height: 34px;
        border: black solid 1px;
        box-sizing: border-box;
      
        position: absolute;
        right: 0;
      
        display: flex;
        align-items: center;
        padding-left: 3px;
      }
      
      .quadradinhos {
        width: 18.2px;
        height: 17px;
        border-left: black solid 1px;
        position: absolute;
        right: 0;
        box-sizing: border-box;
      
        display: flex;
        justify-content: center;
        align-items: center; 
      }
      
      .quadradinhos.-cima {
        top:0;
        border-bottom: black solid 1px;
      }
      
      .quadradinhos.-baixo {
        bottom:0;
      }
      
      .quadradinhos.-cima > h2, .quadradinhos.-baixo > h2{
        font-size: 10px;
   
      }
      .atributo-simples.-esquivar {
        width: 130px;
        position: absolute;
        bottom: 0;
        margin-bottom: 10px;
      }

      .atributo-simples > .quadradoTaxaMov {
        width: 30px;
        height: 34px;
        position: absolute;
        right: 4px;

        background-color: rgba(128, 128, 128, .5);
        font-size: 15px;
        border: black solid 1px;
        
      }

      .atributo-simples > .taxaMov {
        font-size: 8px;
        text-align: center;
        position: absolute;

        left: 0;
        width: 50px;
      }
     
      .quadradoTaxaMov > spam {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
      }

      .atributo-simples.-pontosMagia {
        width: 125px;
      }

      .atributo-simples > .quadradoPontosMagia {
        width: 23px;
        height: 22px;
        position: absolute;
        right: 4px;
        

        background-color: rgba(128, 128, 128, .5);
        border-radius: 5px;
        font-size: 15px;
        border: black solid 1px;
      }

      .atributo-simples > .pontosMagia{
        font-size: 11px;
        text-transform: none;
        padding-bottom: 5px;
      }

      .quadradoPontosMagia > spam {
        font-size: 14px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        font-weight: bold;
      }

      
    
    `
    $head.insertAdjacentElement('beforeend', $style)

  }

  module.render = ({atrib}) => {

    //module._style()

    return `<div class="atributo-simples -${atrib}">
      <label class="${atrib}">${atrib}</label>
      <div class="quadrado-principal"><h1>${'70'}</h1>
        <div class="quadradinhos -cima"><h2>${'14'}</h2></div>
        <div class="quadradinhos -baixo"><h2>${'35'}</h2></div>
      </div>
    </div>`
  }

  module.taxaMov = () => {

    return `
    <div class="atributo-simples">
      <label class="taxaMov">Taxa de Movimento</label>
      <div class="quadradoTaxaMov"><spam>10</spam></div>
    </div>
    `
  }

  module.pontosMagia = () => {

    return `
    <div class="atributo-simples -pontosMagia">
      <label class="pontosMagia">Pontos de Magia</label>
      <div class="quadradoPontosMagia"><spam>0</spam></div>
    </div>
    `
  }

  return {
    render: module.render,
    style: module.style,
    taxaMov: module.taxaMov,
    pontosMagia: module.pontosMagia
  }

})()