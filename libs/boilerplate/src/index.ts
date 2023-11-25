import { defineElement } from '@custom-bits/core';

import { elementTag, HTMLTestElement } from './component.ts';

defineElement(elementTag, HTMLTestElement);

declare global {
	interface HTMLElementTagnameMap {
		[elementTag]: HTMLTestElement;
	}
}
