import $ from 'jquery';
const alphabet = ['a','b','c','d','e','f','g','h','i','l','m','n','o','p','q','r','s','t','u','v','z'];

class Keyboard {
    constructor(elem) {
        this.elem = elem;
        this.init();
    }

    init() {

        this.keyList = $('<div class="keyboard__key-list"></div>').appendTo(this.elem);

        const keyList = alphabet.map(letter => `<div class="keyboard__key">${letter}</div>`);

        this.keyList.append(keyList.join(''));
    }
}


export default Keyboard;