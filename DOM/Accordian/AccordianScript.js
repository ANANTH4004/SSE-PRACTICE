class Accordian extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })

    const wrapper = document.createElement('div')
    wrapper.classList.add('accordian')

    //create a header
    const header = document.createElement('div')
    header.classList.add('accordian-header')
    header.textContent = this.getAttribute('title') || 'Accordian'

    //create a content
    const content = document.createElement('div')
    content.classList.add('accordian-content')

    const slot = document.createElement('slot')
    content.appendChild(slot)

    wrapper.appendChild(header)
    wrapper.appendChild(content)

    const style = document.createElement('style')
    style.textContent = `
      .accordian {
        border: 1px solid #ccc;
        margin: 10px 0;
        border-radius: 5px;
        font-family: sans-serif;
        overflow: hidden;
      }
      .accordian-header {
        background: #f2f2f2;
        padding: 10px 15px;
        cursor: pointer;
        font-weight: bold;
       
      }
      .accordian-header::after {
        content: '+';
        position: absolute;
        right: 15px;
      }
      :host(.open) .accordian-header::after {
        content: '-';
      }
      .accordian-content {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.8s ease;
        padding: 0 15px;
      }
      :host(.open) .accordian-content {
        padding: 10px 15px;
      }
    `

    this.shadowRoot.append(style, wrapper)

    header.addEventListener('click', () => {
      const isOpen = this.classList.toggle('open')
      content.style.maxHeight = isOpen ? content.scrollHeight + 'px' : null
      null
    })

    this.contentEl = content
  }
  connectedCallback() {
    this.contentEl.style.maxHeight = null
  }
}

customElements.define('accordian-el', Accordian)
