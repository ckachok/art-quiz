import { IAnswersArtists, IAnswersPicture } from '../interfaces/interfaces';

export const shuffle = (array: IAnswersArtists[] | IAnswersPicture[]): void => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

export const preloadPicture = (link: string, element: HTMLElement): void => {
  const img = new Image();
  img.src = link;
  img.onload = (): void => {
    element.style.backgroundImage = `url("${link}")`;
  };
};