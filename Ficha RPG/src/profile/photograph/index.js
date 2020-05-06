const photograph = (function() {
  const module = {}

  module._style = () => {

    const $head = document.querySelector('head')
    const $style = document.createElement('style')

    $style.textContent = `
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

  module.render = () => {

    module._style()

    return `<li><img class="foto" src="" alt="foto" name="info"><label for="info">Colar foto aqui</label></li>`
  }

  return {
    render: module.render
  }


})()