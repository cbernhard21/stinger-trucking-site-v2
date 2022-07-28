export function createHeader(phoneNumber) {
  let routes = [
    {
      link: 'index',
      label: 'Home',
    },
    {
      link: 'about',
      label: 'About',
    },
    {
      link: 'services',
      label: 'Services',
    },
    {
      link: 'contact',
      label: 'Contact',
    },
  ];

  const navLinks = routes
    .map((route) => {
      return `
      <li><a href="${route.link}.html" class="navLink">${route.label.toUpperCase()}</a></li>
    `;
    })
    .join('');

  const headerTemplate = document.createElement('template');

  headerTemplate.innerHTML = `
  <style>

    header {
      width: 95%;
      margin: 0 auto;
      padding: 1rem 0 0 0;
      background-color: var(--black);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      font-size: 2rem;
      position: relative;
    }
  
    .logo-container {
      max-width: 20rem;
      align-self: center;
    }
  
    .truck-logo-container {
      position: relative
      align-self: center;
    }

    @media screen and (max-width: 770px) {
      .truck-logo-container {
        display: none;
      }
    }
  
    .nav-container {
      align-self: center;
    }

    a {
      text-decoration: none;
      color: var(--faded-white);
      display: inline-block;
      font-size: 1.6rem;
    }
  
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: row;
      gap: 5rem;
    }

    @media screen and (max-width: 1200px) {
      ul {
        font-size: 2rem;
        gap: 2rem
      }
    }

    .navLink {
      border-bottom: 2px solid var(--black);
      transition: all .2s ease-in-out;
    }

    .navLink:hover {
      border-bottom: 2px solid var(--accent);
      color: var(--white);
    }

    .phoneNumberContainer {
      text-align: center;
      // transform: translateY(-30rem);
      transform: translate(5rem, -3rem);
    }  

    @media screen and (max-width: 500px) {
      .phoneNumberContainer {
        font-size: 1.5rem;
        transform: translateY(-1rem);
      }
    }

    /* BURGER MENU SETUP NO VISIABLE ON LARGE SCREENS */
    .burger-menu {
      width: 40px;
      display: none;
      position: relative;
      z-index: 999;
      cursor: pointer;
    }
    .burger-bar {
      width: 25px;
      height: 3px;
      background-color: #F3F3F3;
      margin: 5px;
    }


    /* MEDIA QUERY FOR NAV ON MEDIUM AND SMALL SCREENS */
    @media screen and (max-width: 500px) {
      .logo {
        font-size: 2rem;
      }
    }
    @media screen and (max-width: 770px) {
      header {
        padding: .5rem 0;
      }
      .burger-menu {
        display: block;
        z-index: 1101;
        cursor: pointer;
      }
      nav {
        background-color: var(--black);
        width: 100%;
        max-width: 100%;
        height: 100vh;
        justify-content: center;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1100;
        transform: translateX(100%);
        transition: transform .5s ease-out;
      }
      ul {
        height: 80vh;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
      }
      nav a {
        font-size: 2rem;
      }
      .slide {
        transform: translateX(0);
      }
      .burger-move .top-line {
        transform: rotate(-45deg) translate(-5px, 6px);
      }
      .burger-move .middle-line {
        opacity: 0;
      }
      .burger-move .bottom-line {
        transform: rotate(45deg) translate(-5px, -6px);
      }
    }
          
  </style>
  
  <link rel="stylesheet" href="../styles/global.css" />
  <header>
    <div class="logo-container">
      <a href="index.html">
        <img src="../images/logo-company-name-bee.png" alt="Logo" />
      </a>
    </div>

    <div class="truck-logo-container">
      <img src="../images/logo-truck-header.png" alt="Truck Logo" />
      <p class="phoneNumberContainer">${phoneNumber}</p>
    </div>

    <div class="nav-container">
      <nav>
        <ul class="nav-list">
          ${navLinks}
        </ul>
      </nav>

      <div class="burger-menu">
        <div class="burger-bar top-line"></div>
        <div class="burger-bar middle-line"></div>
        <div class="burger-bar bottom-line"></div>
      </div>
    </div>
  </header>
  
  `;

  class Header extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(headerTemplate.content.cloneNode(true));

      //adds CSS class current to the page the user is currently on
      const body = document.querySelector('body');
      const allNavLinks = this.shadowRoot.querySelectorAll('.navLink');
      allNavLinks.forEach((link) => {
        if (body.id === link.innerText.toLowerCase()) {
          link.classList.add('current');
        }
      });

      //controls the nav menu for smaller screens
      const burgerMenu = this.shadowRoot.querySelector('.burger-menu');
      const navList = this.shadowRoot.querySelector('nav');

      burgerMenu.addEventListener('click', () => {
        //toggle nav on screen
        navList.classList.toggle('slide');
        //animate burger bars
        burgerMenu.classList.toggle('burger-move');
      });
    }
  }

  customElements.define('header-component', Header);
}
