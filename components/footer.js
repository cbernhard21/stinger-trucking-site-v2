export function createFooter(phoneNumber) {
  const footerTemplate = document.createElement('template');

  footerTemplate.innerHTML = `

        <style>
          *,
          *::after,
          *::before {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          img {
            max-width: 100%;
            display: block;
          }


          footer {
            width: 95%;
            margin: 0 auto;
            padding: 3rem 0;
            font-size: 1.4rem;
            font-weight: var(--fw-300);
            letter-spacing: 1.4px;
            background-color: var(--black);
            color: var(--faded-white);
            display: flex;
            justify-content: space-between;
          }

          @media screen and (max-width: 550px) {
            footer {
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
          }

          a,
          a:visited,
          a:link {
            color: var(--faded-white);
            text-decoration: none;
            transition: all .1s ease-in;
          }

          .footer-copyright {
            text-align: center;
          }

          h2 {
            color: var(--white);
            font-family: var(--ff-inter);
            font-weight: var(--fw-300);
            font-size: 2rem;
            margin-bottom: 1rem;
          }

          @media screen and (max-width: 550px) {
            h2 {
              text-align: center;
              margin-bottom: 0;
            }
          }

          ul {
            list-style-type: none;
          }

          @media screen and (max-width: 550px) {
            ul {
              display: flex;
              gap: 1.5rem;
            }
          }

          li {
            margin-bottom: 1rem;
          }

          img {
            opacity: .6;
          }

          .footer-copyright {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
          }

          .phoneNumberContainer {
            text-decoration: none;
            display: block;
          }
          
          .footer-nav a:hover {
            color: var(--white);
          }

          @media screen and (max-width: 550px) {
            .hidden {
              display: none;
            }
            .footer-contact {
              text-align: center;
              order: 1;
            }

            .footer-nav {
              order: 2;
            }

            .footer-copyright {
              order: 3;
            }


            .footer-contact,
            .footer-nav {
              margin-bottom: 2rem;
            }
          }
        </style>
        <footer>        
          <div class="footer-contact">
            <h2>Contact Us</h2>
            <a class="phoneNumberContainer" href="tel:${phoneNumber}">${phoneNumber}</a>
            <p>shawngarner@live.com</p>
          </div>

          <div class="footer-copyright">   
            <img src="../images/logo-company-name-bee.png" alt="Logo" class="hidden" />
            <p>&copy <span class="year">2022</span> Stinger Trucking</p>
            <p>Design and Maintained By Left Hand Productions</p>
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
      const yearContainer = this.shadowRoot.querySelector('.year');
      const date = new Date();
      let year = date.getFullYear();

      yearContainer.innerText = year;

      let activePage = window.location.pathname;
      if (activePage === '/' || activePage === '/index.html') {
        activePage = '#';
        homeLink.setAttribute('href', activePage);
      }
    }
  }
  customElements.define('footer-component', Footer);
}
