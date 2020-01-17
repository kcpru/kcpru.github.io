class Slider {
    constructor(data = {
        el: ".slider"
    }) {
        this.data = data
        this.el = document.querySelectorAll(data.el);
        this.slideArray = [...this.el].map(el => el.offsetTop)
        this.counter = 0
    }

    createButton = () => {
        const upButton = document.createElement("button");
        upButton.style.cssText = `
            border: 2px solid #FFF6;
            background: transparent;
            transition: .1s;
            cursor: pointer;
            width: 50px;
            height: 40px;
            position: fixed;
            right: 50px;

            bottom: 50px;
            border-radius: 0px 0px 25px 25px;
        `
        upButton.onclick = () => {
            this.scroll(1)
        }
        document.body.appendChild(upButton);

        const downButton = document.createElement("button");
        downButton.style.cssText = `
            border: 2px solid #FFF6;
            background: transparent;
            transition: .1s;
            cursor: pointer;
            width: 50px;
            height: 40px;
            position: fixed;
            right: 50px;

            bottom: 100px;
            border-radius: 25px 25px 0px 0px;
        `
        downButton.onclick = () => {
            this.scroll(-1)
        }
        document.body.appendChild(downButton);
    }

    resizeWindows = () => {
        window.onresize = () => {
            this.slideArray = [...this.el].map(el => el.offsetTop)
            window.scrollTo(0, this.slideArray[this.counter])
        }
    }

    keyPress = () => {
        window.onkeydown = (ev) => {
            let keyCode = ev.which
            if (keyCode == 87 || keyCode == 38) this.scroll(-1)
            if (keyCode == 83 || keyCode == 40) this.scroll(1)
        }
    }

    scroll = (y) => {
        if (y === 1 && this.counter < this.slideArray.length - 1) this.counter++
            else if (y === -1 && this.counter > 0) this.counter--

                window.scrollTo(0, this.slideArray[this.counter])
        console.log(this.counter)
    }

    this = () => this

    on = () => {
        this.createButton()
        this.resizeWindows()
        this.keyPress()
    }
}

const slider = new Slider().on()


class Selection {
    constructor() {
        this.selObj = window.getSelection().toString();
    }

    create = () => {
        const selection = document.createElement("div");
        selection.style.cssText = ``
        selection.classList.add('selection')
        window.onclick = () => {
            this.selObj = window.getSelection().toString()
            selection.innerHTML = this.selObj
        }
        document.body.appendChild(selection);
    }
    on = () => {
        this.create()
    }
}

const selection = new Selection().on()