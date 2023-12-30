import { defineElement } from ':core';
import { HTMLTestElement, elementTag } from './component.ts';

defineElement(elementTag, HTMLTestElement);

export default HTMLTestElement;

declare global {
	interface Window {
		HTMLTestElement: typeof HTMLTestElement;
	}
	interface HTMLElementTagnameMap {
		[elementTag]: HTMLTestElement;
	}
}
