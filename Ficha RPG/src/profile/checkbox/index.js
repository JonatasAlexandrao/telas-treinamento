const checkBox = (function() {
  const module = {}

   module._style = () => {
     const $head = document.querySelector('head')
     const $style = document.createElement('style')

     $style.textContent = `
     .profile li {
        list-style: none;
      }
     .profile li label {
        font-size: 9px;
      }
     `
     $head.insertAdjacentElement('beforeend', $style)
  }

  module.render = (content) => {

    module._style()
    return `
    <li>
      <input class="checkbox" type="checkbox" name="${content}">
      <label for="${content}">${content}</label>
    </li>
    `
  }

  return {
    render: module.render
  }

})()