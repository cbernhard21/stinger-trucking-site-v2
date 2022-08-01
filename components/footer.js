export function createFooter(phoneNumber) {
    const footerTemplate = document.createElement('template');

    footerTemplate.innerHTML = `

        <style>
            footer {
                background-color: var(--black);
                color: var(--white);
                padding: 1rem 0;
                font-size: .6rem;
                width: 100%;
                text-align: center;
            }
        </style>

        <link rel="stylesheet" href="../styles/global.css" />
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
            const shadowRoot = this.attachShadow({mode: 'open'});
            shadowRoot.appendChild(footerTemplate.content.cloneNode(true));
        }
    }
    customElements.define('footer-component', Footer);
}