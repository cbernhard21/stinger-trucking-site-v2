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
            display: flex;
            justify-content: space-between;
          }

          .footer-copyright {
            text-align: center;
          }

          .phoneNumberContainer {
            text-decoration: none;
            display: block;
            color: var(--white);
          } 
        </style>

        <link rel="stylesheet" href="../styles/component-reset.css" />
        <footer>
        
          <div class="footer-contact"></div>
          <div class="footer-copyright">          
            <p>Stinger Trucking Company</p>
            <a class="phoneNumberContainer" href="tel:${phoneNumber}">${phoneNumber}</a>
            <p>Copyright 2022</p>
          </div>
          <div class="footer-nav">
            <h2>Site Map</h2>
            <ul>
              <li><a href="index.html" class="home">Home</a></li>
              <li><a href="photos.html">Photos</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
        </footer>
    `;

  class Footer extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(footerTemplate.content.cloneNode(true));
      const homeLink = this.shadowRoot.querySelector('.home');



      let activePage = window.location.pathname;
      if(activePage === '/' || activePage === '/index.html') {
        activePage = '#';
        homeLink.setAttribute('href', activePage);
      }
    }
  }
  customElements.define('footer-component', Footer);
}
