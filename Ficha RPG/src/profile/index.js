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
        margin-top: 14px;
        border: 2px solid #000;
      }
      
    `
    $head.insertAdjacentElement('beforeend', $style)
  }

  module.render = () => {

    module._style()

    return `<div class="profile"></div>`
  }

  return {
    render: module.render
  }

})()