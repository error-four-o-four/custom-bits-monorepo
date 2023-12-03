import { elementTag, HTMLTestElement } from './component.ts';
import { defineElement } from ':core';

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
