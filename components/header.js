export function createHeader(phoneNumber) {
  let routes = [
    {
      link: 'index',
      label: 'Home',
    },
    {
      link: 'photos',
      label: 'Photos',
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
      <li><a href="${route.link}.html" class="navLink">${route.label}</a></li>
    `;
    })
    .join('');

  const headerTemplate = document.createElement('template');

  headerTemplate.innerHTML = `
  <style>

    header {
      width: 95%;
      margin: 0 auto;
      padding: 1rem 0;
      font-size: 1.6rem;
      background-color: var(--black);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      position: relative;
      letter-spacing: 2px;
      overflow: hidden;
    }

    @media screen and (max-width: 1150px) {
      header {
        font-size: 1.4rem;
      }
    }
  
    .logo-container {
      max-width: 200px;
      align-self: center;
    }
  
    .truck-logo-container {
      position: relative
      align-self: center;
      max-width: 500px
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
      letter-spacing: 3px;
      text-transform: uppercase;
    }
  
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: row;
      gap: 4rem;
    }

    @media screen and (max-width: 1150px) {
      ul {
        gap: 1.5rem
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
      display: block;
      color: var(--white);
      text-align: center;
      margin: -2.5rem;
      transform: translateX(3.5rem);
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
        height: 90vh;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
      }
      nav a {
        font-size: 1.8rem;
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
    .active {
      color: var(--white);
    }
  </style>
  
  <link rel="stylesheet" href="../styles/component-reset.css" />
  <header>
    <div class="logo-container">
      <a href="index.html">
        <img src="../images/logo-company-name-bee.png" alt="Logo" />
      </a>
    </div>

    <div class="truck-logo-container">
      <img src="../images/logo-truck-header.png" alt="Truck Logo" />
      <a class="phoneNumberContainer" href="tel:${phoneNumber}">${phoneNumber}</a>
      <!-- <p class="phoneNumberContainer">${phoneNumber}</p> -->
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

      //adds CSS class active to the page the user is currently on
      let activePage = window.location.pathname;
      if(activePage === '/') {
        activePage = '/index.html';
      }
      
      const mainNavLinks = this.shadowRoot.querySelectorAll('nav a');
      mainNavLinks.forEach(link => {
        if(link.href.includes(`${activePage}`)){
          link.classList.add('active');
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
