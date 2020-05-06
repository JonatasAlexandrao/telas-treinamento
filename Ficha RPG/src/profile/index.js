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
        display:flex;
        flex-wrap: wrap;
        justify-content: center;

        /*border: 2px solid #000;*/
        
      }

      .profile > .separa {
        width: 100%;
        height: 260px;
        bottom: -5px;
        position: absolute;
        
        display:flex;
        flex-wrap: wrap;
        justify-content: center;

        /*border: 2px solid #000;*/
      }
      
    `
    $head.insertAdjacentElement('beforeend', $style)
  }



  module._children = () => {

    const $photograph = photograph.render()

    const $lifeBar = statusBar.render('Vida ')
    const $checktInconciente = checkBox.render('Inconciente')
    const $checktLesao = checkBox.render('Lesão Grave')
    const $checktMorrendo = checkBox.render('Morrendo')

    const $sanityBar = statusBar.render('Sanidade ')
    const $checktInsanidadeTemp = checkBox.render('Insanidade Temp.')
    const $checktInsanidadeIndef = checkBox.render('Insanidade Indef.')

    const $combat = combat.render()
    

    return `
    
    ${$photograph}
    <div class="separa">
      ${$lifeBar}
      ${$checktInconciente}
      ${$checktLesao}
      ${$checktMorrendo}
      ${$sanityBar}
      ${$checktInsanidadeTemp}
      ${$checktInsanidadeIndef}
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