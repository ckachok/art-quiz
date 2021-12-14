import './popup-answer.scss';
import BaseComponent from '../base-component';
import PicturesData from '../game-board/pictures-data';
import { IPicturesData } from '../../interfaces/interfaces';
import { QUIZ_INFO } from '../../constants/constants';

class PopUpAnswer extends BaseComponent {
  private questionNumber: number;
  private picturesData: Promise<IPicturesData>;
  public checkItem: HTMLElement;
  public nextButton: HTMLElement;

  constructor(tagName: string, className: string, questionNumber: number) {
    super(tagName, className);
    this.questionNumber = questionNumber;
    this.picturesData = new PicturesData().getPictureData(this.questionNumber);
    this.nextButton = this.createButtonNext();
    this.createPopUp();
  }

  async createPictureNameItem(): Promise<HTMLElement> {
    const pictureName = (await this.picturesData).name;
    const pictureNameItem = new BaseComponent('p', 'pop-up__picture-name').node;
    pictureNameItem.innerHTML = pictureName;
    return pictureNameItem;
  }

  async createPictureInfoItem(): Promise<HTMLElement> {
    const pictureAuthor = (await this.picturesData).author;
    const pictureYear = (await this.picturesData).year;
    const pictureInfoItem = new BaseComponent('p', 'pop-up__picture-info').node;
    pictureInfoItem.innerHTML = `${pictureAuthor}, ${pictureYear}`;
    return pictureInfoItem;
  }

  async createPictureItem(): Promise<HTMLElement> {
    this.checkItem = new BaseComponent('div', 'pop-up__check-item').node;

    const pictureNumber = (await this.picturesData).pictureNum;
    const linkToPicture = `${QUIZ_INFO.coverLink}${pictureNumber}.jpg`;
    const picture = new BaseComponent('div', 'pop-up__picture').node;
    picture.style.backgroundImage = `url("${linkToPicture}")`;
    picture.append(this.checkItem);
    return picture;
  }

  createButtonNext(): HTMLElement {
    const button = new BaseComponent('button', 'btn pop-up__btn-next').node;
    button.innerHTML = 'Next';
    return button;
  }

  async createPopUp(): Promise<void> {
    const [pictureItem, pictureNameItem, pictureInfoItem] = 
          [await this.createPictureItem(), await this.createPictureNameItem(), await this.createPictureInfoItem()];
    const popUpContainer = new BaseComponent('div', 'pop-up__container').node;
    popUpContainer.append(pictureItem, pictureNameItem, pictureInfoItem, this.nextButton);
    this.node.append(popUpContainer);
  }
}

export default PopUpAnswer