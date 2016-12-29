import $ from 'jquery';
import config from './config';

class Display {
    constructor(elem) {
        this.elem = elem;
        this.listenEvent();
    }

    listenEvent() {
        $(document).on(config.eventNames.keyPress, (event, attachments) => {
            if(attachments.letterVal){
                this.addLetterToContent(attachments.letterVal);
            } else if(attachments.spaceBarVal) {
                this.addLetterToContent(' ');
            } else if(attachments.removeLetter) {
                this.removeLetter();
            }
        });
    }

    addLetterToContent(letter) {
        this.elem.text(this.elem.text() + letter);
    }

    removeLetter() {
        this.elem.text(this.elem.text().slice(0,-1));
    }
}


export default Display;