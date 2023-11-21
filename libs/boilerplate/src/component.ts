import html from './template.html?raw';
import rawCss from './template.css?inline';

const template = document.createElement('template');
template.innerHTML = `<style>${rawCss}</style>${html}\n`;

console.log('morp from component');

export const ElementTag = 'test-element';

export class HTMLTestElement extends HTMLElement {
	public shadow: ShadowRoot;

	public wrap: HTMLSpanElement;

	constructor() {
		super();
		this.shadow = this.attachShadow({ mode: 'open' });
		this.shadow.appendChild(template.content.cloneNode(true));
		this.wrap = this.shadow.lastElementChild as HTMLSpanElement;
	}

	public connectedCallback(): void {
		const name = this.getAttribute('name') || 'World';
		this.wrap.textContent = `Hellooooo ${name}`;
	}
}
