import $ from 'jquery';
import config from './config';
const alphabet = ['a','b','c','d','e','f','g','h','i','l','m','n','o','p','q','r','s','t','u','v','z'];

class Keyboard {
    constructor(elem) {
        this.elem = elem;
        this.init();
        this.attachListeners();
    }

    init() {
        // add key list
        this.keyList = $('<div class="keyboard__key-list"></div>').appendTo(this.elem);

        // add keys
        const keyList = alphabet.map(letter => `<div class="keyboard__key" data-js-key>${letter}</div>`);
        keyList.push(`<div class="keyboard__key keyboard__key--space" data-js-space-bar></div>`);
        keyList.push(`<div class="keyboard__key keyboard__key--delete" data-js-delete-key></div>`);
        this.keyList.append(keyList.join(''));
    }

    attachListeners() {
        this.elem.on('click', '[data-js-key]', event => {
            $(document).trigger(config.eventNames.keyPress, {letterVal : event.currentTarget.innerHTML});
        });
        this.elem.on('click', '[data-js-space-bar]', () => {
            $(document).trigger(config.eventNames.keyPress, {spaceBarVal : true});
        });
        this.elem.on('click', '[data-js-delete-key]', () => {
            $(document).trigger(config.eventNames.keyPress, {removeLetter : true});
        });
    }
}


export default Keyboard;