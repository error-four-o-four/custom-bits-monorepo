export const CTORNAME_TAGNAME_MAP = {
	HTMLAnchorElement: 'a',
	HTMLAreaElement: 'area',
	HTMLAudioElement: 'audio',
	HTMLBRElement: 'br',
	HTMLBaseElement: 'base',
	HTMLBodyElement: 'body',
	HTMLButtonElement: 'button',
	HTMLCanvasElement: 'canvas',
	HTMLDListElement: 'dl',
	HTMLDataElement: 'data',
	HTMLDataListElement: 'datalist',
	HTMLDetailsElement: 'details',
	HTMLDialogElement: 'dialog',
	HTMLDivElement: 'div',
	HTMLElement: ['abbr', 'address', 'article', 'aside', 'b', 'bdi', 'bdo', 'cite', 'code', 'dd', 'dfn', 'dt', 'em', 'figcaption', 'figure', 'footer', 'header', 'hgroup', 'i', 'kbd', 'main', 'mark', 'nav', 'noscript', 'rp', 'rt', 'ruby', 's', 'samp', 'search', 'section', 'small', 'strong', 'sub', 'summary', 'sup', 'u', 'var', 'wbr'],
	HTMLEmbedElement: 'embed',
	HTMLFieldSetElement: 'fieldset',
	HTMLFormElement: 'form',
	HTMLHRElement: 'hr',
	HTMLHeadElement: 'head',
	HTMLHeadingElement: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
	HTMLHtmlElement: 'html',
	HTMLIFrameElement: 'iframe',
	HTMLImageElement: 'img',
	HTMLInputElement: 'input',
	HTMLLIElement: 'li',
	HTMLLabelElement: 'label',
	HTMLLegendElement: 'legend',
	HTMLLinkElement: 'link',
	HTMLMapElement: 'map',
	HTMLMenuElement: 'menu',
	HTMLMetaElement: 'meta',
	HTMLMeterElement: 'meter',
	HTMLModElement: ['del', 'ins'],
	HTMLOListElement: 'ol',
	HTMLObjectElement: 'object',
	HTMLOptGroupElement: 'optgroup',
	HTMLOptionElement: 'option',
	HTMLOutputElement: 'output',
	HTMLParagraphElement: 'p',
	HTMLPictureElement: 'picture',
	HTMLPreElement: 'pre',
	HTMLProgressElement: 'progress',
	HTMLQuoteElement: ['blockquote', 'q'],
	HTMLScriptElement: 'script',
	HTMLSelectElement: 'select',
	HTMLSlotElement: 'slot',
	HTMLSourceElement: 'source',
	HTMLSpanElement: 'span',
	HTMLStyleElement: 'style',
	HTMLTableCaptionElement: 'caption',
	HTMLTableCellElement: ['td', 'th'],
	HTMLTableColElement: ['col', 'colgroup'],
	HTMLTableElement: 'table',
	HTMLTableRowElement: 'tr',
	HTMLTableSectionElement: ['tbody', 'tfoot', 'thead'],
	HTMLTemplateElement: 'template',
	HTMLTextAreaElement: 'textarea',
	HTMLTimeElement: 'time',
	HTMLTitleElement: 'title',
	HTMLTrackElement: 'track',
	HTMLUListElement: 'ul',
	HTMLVideoElement: 'video'
} as const;

export const TAGNAME_CTORNAME_MAP = {
	a: 'HTMLAnchorElement',
	abbr: 'HTMLElement',
	address: 'HTMLElement',
	area: 'HTMLAreaElement',
	article: 'HTMLElement',
	aside: 'HTMLElement',
	audio: 'HTMLAudioElement',
	b: 'HTMLElement',
	base: 'HTMLBaseElement',
	bdi: 'HTMLElement',
	bdo: 'HTMLElement',
	blockquote: 'HTMLQuoteElement',
	body: 'HTMLBodyElement',
	br: 'HTMLBRElement',
	button: 'HTMLButtonElement',
	canvas: 'HTMLCanvasElement',
	caption: 'HTMLTableCaptionElement',
	cite: 'HTMLElement',
	code: 'HTMLElement',
	col: 'HTMLTableColElement',
	colgroup: 'HTMLTableColElement',
	data: 'HTMLDataElement',
	datalist: 'HTMLDataListElement',
	dd: 'HTMLElement',
	del: 'HTMLModElement',
	details: 'HTMLDetailsElement',
	dfn: 'HTMLElement',
	dialog: 'HTMLDialogElement',
	div: 'HTMLDivElement',
	dl: 'HTMLDListElement',
	dt: 'HTMLElement',
	em: 'HTMLElement',
	embed: 'HTMLEmbedElement',
	fieldset: 'HTMLFieldSetElement',
	figcaption: 'HTMLElement',
	figure: 'HTMLElement',
	footer: 'HTMLElement',
	form: 'HTMLFormElement',
	h1: 'HTMLHeadingElement',
	h2: 'HTMLHeadingElement',
	h3: 'HTMLHeadingElement',
	h4: 'HTMLHeadingElement',
	h5: 'HTMLHeadingElement',
	h6: 'HTMLHeadingElement',
	head: 'HTMLHeadElement',
	header: 'HTMLElement',
	hgroup: 'HTMLElement',
	hr: 'HTMLHRElement',
	html: 'HTMLHtmlElement',
	i: 'HTMLElement',
	iframe: 'HTMLIFrameElement',
	img: 'HTMLImageElement',
	input: 'HTMLInputElement',
	ins: 'HTMLModElement',
	kbd: 'HTMLElement',
	label: 'HTMLLabelElement',
	legend: 'HTMLLegendElement',
	li: 'HTMLLIElement',
	link: 'HTMLLinkElement',
	main: 'HTMLElement',
	map: 'HTMLMapElement',
	mark: 'HTMLElement',
	menu: 'HTMLMenuElement',
	meta: 'HTMLMetaElement',
	meter: 'HTMLMeterElement',
	nav: 'HTMLElement',
	noscript: 'HTMLElement',
	object: 'HTMLObjectElement',
	ol: 'HTMLOListElement',
	optgroup: 'HTMLOptGroupElement',
	option: 'HTMLOptionElement',
	output: 'HTMLOutputElement',
	p: 'HTMLParagraphElement',
	picture: 'HTMLPictureElement',
	pre: 'HTMLPreElement',
	progress: 'HTMLProgressElement',
	q: 'HTMLQuoteElement',
	rp: 'HTMLElement',
	rt: 'HTMLElement',
	ruby: 'HTMLElement',
	s: 'HTMLElement',
	samp: 'HTMLElement',
	script: 'HTMLScriptElement',
	search: 'HTMLElement',
	section: 'HTMLElement',
	select: 'HTMLSelectElement',
	slot: 'HTMLSlotElement',
	small: 'HTMLElement',
	source: 'HTMLSourceElement',
	span: 'HTMLSpanElement',
	strong: 'HTMLElement',
	style: 'HTMLStyleElement',
	sub: 'HTMLElement',
	summary: 'HTMLElement',
	sup: 'HTMLElement',
	table: 'HTMLTableElement',
	tbody: 'HTMLTableSectionElement',
	td: 'HTMLTableCellElement',
	template: 'HTMLTemplateElement',
	textarea: 'HTMLTextAreaElement',
	tfoot: 'HTMLTableSectionElement',
	th: 'HTMLTableCellElement',
	thead: 'HTMLTableSectionElement',
	time: 'HTMLTimeElement',
	title: 'HTMLTitleElement',
	tr: 'HTMLTableRowElement',
	track: 'HTMLTrackElement',
	u: 'HTMLElement',
	ul: 'HTMLUListElement',
	var: 'HTMLElement',
	video: 'HTMLVideoElement',
	wbr: 'HTMLElement'
} as const;
