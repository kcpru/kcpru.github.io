"use strict";

class Slider {
    constructor(
        data = {
            el: ".slider",
        }
    ) {
        this.data = data;
        this.el = document.querySelectorAll(data.el);
        this.slideArray = [...this.el].map(el => el.offsetTop);
        this.counter = 0;
    }

    createButton() {
        const upButton = document.createElement("button");
        const buttonCssText = style => `
            border: none;
            background: transparent;
            transition: .2s;
            cursor: pointer;
            position: fixed;
            right: 50px;
            font-size: 2rem;
            color: #fffffe80;
            ${style || ""}
        `;
        upButton.style.cssText = buttonCssText`
            bottom: 100px;
        `;

        upButton.innerHTML = `<i class="icon-up-big"></i>`;
        upButton.onclick = () => {
            this.scroll(-1);
        };
        document.body.appendChild(upButton);

        const downButton = document.createElement("button");
        downButton.style.cssText = buttonCssText`
            bottom: 50px;
        `;

        downButton.innerHTML = '<i class="icon-down-big"></i>';
        downButton.onclick = () => {
            this.scroll(1);
        };
        document.body.appendChild(downButton);
    }

    resizeWindows() {
        window.onresize = () => {
            this.slideArray = [...this.el].map(el => el.offsetTop);
            window.scrollTo(0, this.slideArray[this.counter]);
        };
    }

    keyPress() {
        window.onkeydown = ev => {
            let keyCode = ev.which;
            if (keyCode == 87 || keyCode == 38) this.scroll(-1);
            if (keyCode == 83 || keyCode == 40) this.scroll(1);
        };
    }

    scroll(y) {
        if (y === 1 && this.counter < this.slideArray.length - 1)
            this.counter++;
        else if (y === -1 && this.counter > 0) this.counter--;

        window.scrollTo(0, this.slideArray[this.counter]);
        console.log(this.counter);
    }

    on() {
        this.createButton();
        this.resizeWindows();
        this.keyPress();
    }
}

const slider = new Slider().on();

class Selection {
    constructor() {
        this.selObj = window.getSelection().toString();
    }

    create() {
        const selection = document.createElement("div");
        selection.style.cssText = ``;
        selection.classList.add("selection");
        window.onclick = () => {
            this.selObj = window.getSelection().toString();
            if (this.selObj === "" || this.selObj === " " || this.selObj.length < 3) {
                selection.classList.add("selection__empty");
            } else {
                selection.innerHTML = this.selObj;
                selection.classList.remove("selection__empty");
            }
        };
        document.body.appendChild(selection);
    }
    on() {
        this.create();
    }
}

const selection = new Selection().on();
