import Keyboard from './modules/keyboard';
import Display from './modules/display';
// TODO refactor removing jquery dependency
import $ from 'jquery';

const displayElement = $('.display');
if(displayElement.length){
    new Display(displayElement);
}


const keyBoardElement = $('.keyboard');
if(keyBoardElement.length){
    new Keyboard(keyBoardElement);
}