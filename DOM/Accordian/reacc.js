class AccordianRe extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })

    const wrapper = document.createElement('div')
    wrapper.classList.add('accordian')

    const header = document.createElement('div')
    header.classList.add('accordian-header')
    header.textContent = this.getAttribute('title') || 'Accordian'

    const content = document.createElement('div')
    content.classList.add('accordian-content')

    const slot = document.createElement('slot')
    content.appendChild(slot)

    const style = document.createElement('style')
    style.textContent = `.accordian {
        border: 1px solid #ccc;
        margin: 10px 0;
        border-radius: 5px;
        }
        .accordian-header {
        background: #f2f2f2;
        padding: 10px 15px;
        cursor: pointer;
        font-weight: bold;
      }

      .accordian-header::after{
        content: '+';
        position:absolute;
        right: 20px;
      }
    :host(.open) .accordian-header::after{
        content: '-';
    }

    .accordian-content{
        max-height: 0;
        transition: max-height 0.9s ease;
        overflow: hidden;
        padding: 0 10px;
    }
        :host(.open) .accordian-content {
   
}
        `
    wrapper.appendChild(header)
    wrapper.appendChild(content)
    this.shadowRoot.append(style, wrapper)
    header.addEventListener('click', () => {
      const isOpen = this.classList.toggle('open')
      content.style.maxHeight = isOpen ? content.scrollHeight + 'px' : null
    })
    this.contentEl = content
  }
  connectedCallback() {
    this.contentEl.style.maxHeight = null
  }
}

customElements.define('re-accor', AccordianRe)
