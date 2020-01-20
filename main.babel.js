"use strict";

function _instanceof(left, right) {
    if (
        right != null &&
        typeof Symbol !== "undefined" &&
        right[Symbol.hasInstance]
    ) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}

function _templateObject2() {
    var data = _taggedTemplateLiteral([
        "\n            bottom: 50px;\n        ",
    ]);

    _templateObject2 = function _templateObject2() {
        return data;
    };

    return data;
}

function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n            bottom: 100px;\n        ",
    ]);

    _templateObject = function _templateObject() {
        return data;
    };

    return data;
}

function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(
        Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })
    );
}

function _toConsumableArray(arr) {
    return (
        _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread()
    );
}

function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
    if (
        Symbol.iterator in Object(iter) ||
        Object.prototype.toString.call(iter) === "[object Arguments]"
    )
        return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
        }
        return arr2;
    }
}

function _classCallCheck(instance, Constructor) {
    if (!_instanceof(instance, Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}

var Slider =
    /*#__PURE__*/
    (function() {
        function Slider() {
            var data =
                arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : {
                          el: ".slider",
                      };

            _classCallCheck(this, Slider);

            this.data = data;
            this.el = document.querySelectorAll(data.el);
            this.slideArray = _toConsumableArray(this.el).map(function(el) {
                return el.offsetTop;
            });
            this.counter = 0;
        }

        _createClass(Slider, [
            {
                key: "createButton",
                value: function createButton() {
                    var _this = this;

                    var upButton = document.createElement("button");

                    var buttonCssText = function buttonCssText(style) {
                        return "\n            border: none;\n            background: transparent;\n            transition: .2s;\n            cursor: pointer;\n            position: fixed;\n            right: 50px;\n            font-size: 2rem;\n            color: #fffffe80;\n            ".concat(
                            style || "",
                            "\n        "
                        );
                    };

                    upButton.style.cssText = buttonCssText(_templateObject());
                    upButton.innerHTML = '<i class="icon-up-big"></i>';

                    upButton.onclick = function() {
                        _this.scroll(-1);
                    };

                    document.body.appendChild(upButton);
                    var downButton = document.createElement("button");
                    downButton.style.cssText = buttonCssText(
                        _templateObject2()
                    );
                    downButton.innerHTML = '<i class="icon-down-big"></i>';

                    downButton.onclick = function() {
                        _this.scroll(1);
                    };

                    document.body.appendChild(downButton);
                },
            },
            {
                key: "resizeWindows",
                value: function resizeWindows() {
                    var _this2 = this;

                    window.onresize = function() {
                        _this2.slideArray = _toConsumableArray(_this2.el).map(
                            function(el) {
                                return el.offsetTop;
                            }
                        );
                        window.scrollTo(0, _this2.slideArray[_this2.counter]);
                    };
                },
            },
            {
                key: "keyPress",
                value: function keyPress() {
                    var _this3 = this;

                    window.onkeydown = function(ev) {
                        var keyCode = ev.which;
                        if (keyCode == 87 || keyCode == 38) _this3.scroll(-1);
                        if (keyCode == 83 || keyCode == 40) _this3.scroll(1);
                    };
                },
            },
            {
                key: "scroll",
                value: function scroll(y) {
                    if (y === 1 && this.counter < this.slideArray.length - 1)
                        this.counter++;
                    else if (y === -1 && this.counter > 0) this.counter--;
                    window.scrollTo(0, this.slideArray[this.counter]);
                    console.log(this.counter);
                },
            },
            {
                key: "on",
                value: function on() {
                    this.createButton();
                    this.resizeWindows();
                    this.keyPress();
                },
            },
        ]);

        return Slider;
    })();

var slider = new Slider().on();

var Selection =
    /*#__PURE__*/
    (function() {
        function Selection() {
            _classCallCheck(this, Selection);

            this.selObj = window.getSelection().toString();
        }

        _createClass(Selection, [
            {
                key: "create",
                value: function create() {
                    var _this4 = this;

                    var selection = document.createElement("div");
                    selection.style.cssText = "";
                    selection.classList.add("selection");

                    window.onclick = function() {
                        _this4.selObj = window.getSelection().toString();

                        if (_this4.selObj === "" || _this4.selObj === " ") {
                            selection.classList.add("selection__empty");
                        } else {
                            selection.innerHTML = _this4.selObj;
                            selection.classList.remove("selection__empty");
                        }
                    };

                    document.body.appendChild(selection);
                },
            },
            {
                key: "on",
                value: function on() {
                    this.create();
                },
            },
        ]);

        return Selection;
    })();

var selection = new Selection().on();

var Image =
    /*#__PURE__*/
    (function() {
        function Image() {
            _classCallCheck(this, Image);

            this.isActive = false;
        }

        _createClass(Image, [
            {
                key: "large",
                value: function large(img) {
                    if (this.isActive) {
                        img.classList.remove("image__active");
                    } else {
                        img.classList.add("image__active");
                    }

                    this.isActive = !this.isActive;
                },
            },
            {
                key: "addEvent",
                value: function addEvent() {
                    var _this5 = this;

                    var images = document.querySelectorAll("img");
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        var _loop = function _loop() {
                            var img = _step.value;

                            img.onclick = function() {
                                return _this5.large(img);
                            };
                        };

                        for (
                            var _iterator = images[Symbol.iterator](), _step;
                            !(_iteratorNormalCompletion = (_step = _iterator.next())
                                .done);
                            _iteratorNormalCompletion = true
                        ) {
                            _loop();
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (
                                !_iteratorNormalCompletion &&
                                _iterator.return != null
                            ) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                },
            },
            {
                key: "on",
                value: function on() {
                    this.addEvent();
                },
            },
        ]);

        return Image;
    })();

var img = new Image();
img.on();
