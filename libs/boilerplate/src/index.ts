import { ElementTag, HTMLTestElement } from './component.ts';

if (!window.customElements.get(ElementTag)) {
	window.customElements.define(ElementTag, HTMLTestElement);
}

declare global {
	interface HTMLElementTagnameMap {
		[ElementTag]: HTMLTestElement;
	}
}
