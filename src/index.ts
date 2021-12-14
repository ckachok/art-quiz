import '../node_modules/normalize.css/normalize.css';
import './styles.scss';
import App from './app';
import { CUSTOM_SETTINGS } from './constants/constants';

const app = new App();

export let oldHash: string;

document.addEventListener("DOMContentLoaded", async () => {
  await app.router();
});

window.addEventListener('hashchange', async (e: HashChangeEvent) => {
  oldHash = `#${e.oldURL.split('#')[1]}`;
  await app.router();
});

localStorage.setItem('customSettings', JSON.stringify(CUSTOM_SETTINGS));
