import styles from './assets/style.module.css';
import shadow from './assets/shadow.css?raw';

export const tag = 'custom-test';
export const html = /* html */ `<span></span>`;

const sheet = new CSSStyleSheet();
sheet.replaceSync(shadow);

export { sheet, styles };
