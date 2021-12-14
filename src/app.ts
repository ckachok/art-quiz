import HomePage from './pages/home-page/home-page';
import SettingsPage from './pages/settings-page/settings-page';
import CategoryPage from './pages/category-page/category-page';
import QuestionsPage from './pages/questions-page/questions-page';
import { PAGE_IDS, PAGE_HASHES, NAME_CATEGORY } from './constants/constants';

class App {
  private container: HTMLElement;

  constructor() {
    this.container = document.body;
  }

  async router() {
    if (this.container.innerHTML) {
      this.container.innerHTML = '';
    }

    const routes = [
      { hash: PAGE_HASHES.home, id: PAGE_IDS.home,  view: HomePage },
      { hash: PAGE_HASHES.settings, id: PAGE_IDS.settings,  view: SettingsPage },
      { hash: `${PAGE_HASHES.categories}-${NAME_CATEGORY.artists}`, id: PAGE_IDS.categories.artists,  view: CategoryPage },
      { hash: `${PAGE_HASHES.categories}-${NAME_CATEGORY.pictures}`, id: PAGE_IDS.categories.pictures,  view: CategoryPage },
      { hash: `${PAGE_HASHES.quiz}-${NAME_CATEGORY.artists}`, id: PAGE_IDS.quiz.artists,  view: QuestionsPage },
      { hash: `${PAGE_HASHES.quiz}-${NAME_CATEGORY.pictures}`, id: PAGE_IDS.quiz.pictures,  view: QuestionsPage },
    ];

    const defaultRoute = routes[0];
    const currDefinedRoute = routes.find(route => location.hash.includes(route.hash));
    const currRoute = currDefinedRoute || defaultRoute;

    const view = new currRoute.view(currRoute.id);
    await view.render();
  }
}

export default App;