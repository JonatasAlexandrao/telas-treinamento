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
        border: 2px solid #000;
        display:flex;
        flex-wrap: wrap;
        justify-content: center;
      }

      .profile .foto{
        display: block;
        width: 75px;
        height: 111px;
        background-color: rgba(0,0,0,.7);
        border: 2px solid #000;
        border-radius: 10px;
      }

      .profile p {
        font-size: 8px;
        position: absolute;
        top: 160px;
      }
      
    `
    $head.insertAdjacentElement('beforeend', $style)
  }

  module._foto = () => {

    const foto = ""

    return `<img class="foto" src="${foto}" alt="foto"><p>Colar foto aqui</p>`
  }


  module.render = () => {
    module._style()
    return `
    <div class="profile">
      ${module._foto()}
      ${statusBar.render()}
      ${statusBar.render()}
    </div>
    `
  }

  return {
    render: module.render
  }

})()