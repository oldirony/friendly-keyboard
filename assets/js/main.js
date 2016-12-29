import Keyboard from './modules/keyboard';
import $ from 'jquery';

const keyBoardElement = $('.keyboard');
if(keyBoardElement.length){
    new Keyboard(keyBoardElement);
}