const profile = (function() {
  const module = {}

  module._style = () => {

    const $head = document.querySelector('head')
    const $style = document.createElement('style')

    $style.textContent = `
      .profile {
        float: right;
        width: 200px;
        height: 423px;
        margin-top: 12px;

        position: relative;
       

        /*border: 2px solid #000;*/
        
      }

      .profile > .separa {
        width: 100%;
        height: 260px;
        bottom: -5px;
        position: absolute;
        
        /*display:flex;
        flex-wrap: wrap;
        justify-content: center;

        border: 2px solid #000;*/
      }

      .container {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
      }

      .container-barras {
        padding: 0 11px;
        position: relative;
        width: 200px;
        height: 80px;
        box-sizing: border-box;

      }

      ${checkBox.style()}
      ${statusBar.style()}
      
    `
    $head.insertAdjacentElement('beforeend', $style)
  }



  module._children = () => {

    const $photograph = photograph.render()

    const $lifeBar = statusBar.render('Vida ', 'barra-vida')
    const $checktInconciente = checkBox.render('Inconciente')
    const $checktLesao = checkBox.render('Lesão Grave', '-lesaoGrave')
    const $checktMorrendo = checkBox.render('Morrendo', '-morrendo')

    const $sanityBar = statusBar.render('Sanidade ', 'barra-sanidade')
    const $checktInsanidadeTemp = checkBox.render('Insanidade Temp.')
    const $checktInsanidadeIndef = checkBox.render('Insanidade Indef.', '-insanIndef')
    const $pontosMagia = singleAttribute.pontosMagia()

    const $combat = combat.render()
    

    return `
    
    ${$photograph}
    <div class="separa">
      <div class="container-barras">
        ${$lifeBar}
        ${$checktInconciente}
        ${$checktLesao}
        ${$checktMorrendo}
      </div>
      <div class="container-barras">
        ${$sanityBar}
        ${$checktInsanidadeTemp}
        ${$checktInsanidadeIndef}
        ${$pontosMagia}
      </div>
      ${$combat}
    </div>
    
    `

  }


  module.render = () => {
    module._style()
    return `
    <div class="profile">
      ${module._children()}
    </div>
    `
  }
 

  return {
    render: module.render
  }

})()