import { cloneTemplateContent } from '@custom-bits/core';

import { html, sheet, styles } from './config.ts';

export class HTMLTestElement extends HTMLElement {
	static get observedAttributes() {
		return ['name'];
	}

	public shadow: ShadowRoot;
	public elt: HTMLSpanElement;

	constructor() {
		super();

		this.shadow = this.attachShadow({ mode: 'open' });
		this.shadow.appendChild(cloneTemplateContent(html));
		this.shadow.adoptedStyleSheets = [sheet];

		this.elt = this.shadowRoot?.lastElementChild as HTMLSpanElement;
	}

	render() {
		const name = this.getAttribute('name') || 'World';
		this.elt.textContent = `Hello ${name}`;
	}

	connectedCallback() {
		this.classList.add(styles.customTest);
		this.render();
	}

	attributeChangedCallback(attr: string, prev: string, next: string) {
		if (next !== prev) {
			console.log(prev, next);
			this.render();
		}
	}
}
