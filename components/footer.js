export function createFooter(phoneNumber) {
  const footerTemplate = document.createElement('template');

  footerTemplate.innerHTML = `

        <style>
          footer {
              background-color: var(--black);
              color: var(--white);
              padding: 2rem 0;
              font-size: 1.6rem;
              width: 100%;
              text-align: center;
          }
        </style>

        <link rel="stylesheet" href="../styles/component-reset.css" />
        <footer>
            <p>Stinger Trucking Company</p>
            <p>${phoneNumber}</p>
            <p>Copyright 2022</p>
        </footer>
    `;

  class Footer extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(footerTemplate.content.cloneNode(true));
    }
  }
  customElements.define('footer-component', Footer);
}
