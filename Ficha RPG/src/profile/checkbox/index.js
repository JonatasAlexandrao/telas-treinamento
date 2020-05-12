const checkBox = (function() {
  const module = {}

   module.style = () => {
     const $head = document.querySelector('head')
     const $style = document.createElement('style')

     $style.textContent = `
     .profile .container {
        
        display: inline-block;
      }
     .profile li label {
        font-size: 9px;

        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        padding-left: 5px;
      }
      .container-checkbox {
        list-style: none;
        display: inline-block;
        width: 70px;
        position: relative;
      }

      .container-checkbox.-lesaoGrave {
        position: absolute;
        right: 0;
        padding-right: 11px;
      }
      .container-checkbox.-morrendo {
        /*padding: 10px;*/
        position: absolute;
        bottom: 8px;
        left: 70px;
      }
      .container-checkbox.-insanIndef {
        position: absolute;
        right: 0;
        padding-right: 11px;
      }

     `
     $head.insertAdjacentElement('beforeend', $style)
  }

  module.render = (content, classe='') => {

    return `
    <li class="container-checkbox ${classe}">
      <input class="checkbox" type="checkbox" id="${content.replace(' ', '-')}">
      <label for="${content.replace(' ', '-')}">${content}</label>
    </li>
    `
  }

  return {
    render: module.render,
    style: module.style
  }

})()