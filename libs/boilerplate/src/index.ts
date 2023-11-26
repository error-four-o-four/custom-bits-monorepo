import { defineElement } from '@custom-bits/core';

import { elementTag, HTMLTestElement } from './component.ts';

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
