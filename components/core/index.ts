import { HTMLMixin, type CustomConfig } from "src";

// https://html.spec.whatwg.org/multipage/custom-elements.html#custom-element-conformance
// https://github.com/lit/lit/blob/main/packages/reactive-element/src/reactive-element.ts
// https://github.com/WebReflection/hyperHTML-Element/blob/master/esm/index.js
// https://github.com/elix/elix/blob/main/src/core/ReactiveMixin.js

// https://github.com/chialab/dna/blob/main/src/Component.ts
// https://github.com/chialab/dna/blob/main/src/property.ts#L503

// https://component.kitchen/elix (!)
// https://github.com/elix/elix/blob/main/src/core/ReactiveMixin.js

const config = {
	foo: String,
	bar: Number,
	baz: Boolean,
	qux: ['foo', 'bar'] as const,
	quuux: [0, 12, 24, 48] as const,
} satisfies CustomConfig;

const tag = 'custom-test';

declare global {
	interface Window {
		HTMLTestElement: typeof HTMLTestElement;
	}

	interface HTMLElementTagnameMap {
		[tag]: HTMLTestElement;
	}
}

export class HTMLTestElement extends HTMLMixin(config) {
	constructor() {
		super();

		this.foo = 'anything';
		this.baz = true;

		this.innerHTML = 'Hello, World!';
	}
}

await HTMLTestElement.define(tag);

document.querySelector('main')?.appendChild(new HTMLTestElement());

