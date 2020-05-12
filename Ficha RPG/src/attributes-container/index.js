const attributesContainer = (function() {

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
        padding: 7px 0 4px;
        font-size: 14px;
        text-align: center;
        text-transform: uppercase;

      }
    `
    $head.insertAdjacentElement('beforeend', $style)

  }

  module._childrens = () => {
    singleAttribute.style()
    const $for = singleAttribute.render({
      atrib: 'For',
     /*total: '70',
      valorUm: '14',
      valorDois: '35',*/
    })
    const $con = singleAttribute.render({atrib: 'Con'})
    const $tam = singleAttribute.render({atrib: 'Tam'})
    const $int = singleAttribute.render({atrib: 'Int'})
    const $sor = singleAttribute.render({atrib: 'Sor'})

    const $des = singleAttribute.render({atrib: 'Des'})
    const $apa = singleAttribute.render({atrib: 'Apa'})
    const $edu = singleAttribute.render({atrib: 'Edu'})
    const $pod = singleAttribute.render({atrib: 'Pod'})
    
    const $taxaMov = singleAttribute.taxaMov()
    
    

    return `
    ${$for}
    ${$des}
    ${$con}
    ${$apa}
    ${$tam}
    ${$edu}
    ${$int}
    ${$pod}
    ${$sor}
    ${$taxaMov}
    
    `
  }

  module.render = () => {

    module._style()

    return `<div class="atributos">
      <h2>Atributos</h2>
      ${module._childrens()}
    </div>`
  }

  return {
    render: module.render
  }

})()