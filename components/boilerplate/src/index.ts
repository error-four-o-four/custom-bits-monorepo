import { defineElement } from '@custom-bits/core';

import { tag } from './config.ts';
import { HTMLTestElement } from './component.ts';

defineElement(tag, HTMLTestElement);

export default HTMLTestElement;

declare global {
	interface Window {
		HTMLTestElement: typeof HTMLTestElement;
	}
	interface HTMLElementTagnameMap {
		[tag]: HTMLTestElement;
	}
}
