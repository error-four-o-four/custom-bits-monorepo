import { cloneTemplateContent } from '@custom-bits/core';

import { html, css, styles } from './config.ts';

export class HTMLTestElement extends HTMLElement {
	public shadow: ShadowRoot;

	public elt: HTMLSpanElement;

	constructor() {
		super();
		this.shadow = this.attachShadow({ mode: 'open' });
		this.shadow.appendChild(cloneTemplateContent(html, css));
		this.elt = this.shadow.lastElementChild as HTMLSpanElement;

		this.elt.classList.add(styles.span);
	}

	public connectedCallback(): void {
		const name = this.getAttribute('name') || 'World';
		this.elt.textContent = `Hello ${name}`;
	}
}
