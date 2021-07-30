/*
 * Name: inputTag
 * Author: cshaptx4869
 * Project: https://github.com/cshaptx4869/inputTag
 */
(function (define) {
    define(['jquery'], function ($) {
        "use strict";

        class InputTag {

            options = {
                elem: '.fairy-tag-input',
                theme: ['fairy-bg-red', 'fairy-bg-orange', 'fairy-bg-green', 'fairy-bg-cyan', 'fairy-bg-blue', 'fairy-bg-black'],
                data: [],
                permanentData: [],
            };

            get elem() {
                return $(this.options.elem);
            }

            constructor(options) {
                this.render(options);
            }

            render(options) {
                this.init(options);
                this.listen();
            }

            init(options) {
                var spans = '', that = this;
                this.options = $.extend(this.options, options);
                !this.elem.attr('placeholder') && this.elem.attr('placeholder', '添加标签');
                $.each(this.options.data, function (index, item) {
                    spans += that.spanHtml(item);
                });
                this.elem.before(spans);
            }

            listen() {
                var that = this;

                this.elem.parent().on('click', 'a', function () {
                    that.removeItem($(this).parent('span'));
                });

                this.elem.keydown(function (event) {
                    var keyNum = (event.keyCode ? event.keyCode : event.which);
                    if (keyNum === 8) {
                        if (!that.elem.val().trim()) {
                            var closeItems = that.elem.parent().find('a');
                            if (closeItems.length) {
                                that.removeItem($(closeItems[closeItems.length - 1]).parent('span'));
                            }
                        }
                    } else if (keyNum === 13) {
                        that.createItem();
                    }
                });

                this.onChange();
            }

            createItem() {
                var value = this.elem.val().trim();
                if (!value) return false;
                if (!this.options.data.includes(value)) {
                    this.options.data.push(value);
                    this.elem.before(this.spanHtml(value));
                }
                this.elem.val('');
                this.onChange();
            }

            removeItem(target) {
                var that = this;
                var closeSpan = target.remove(),
                    closeSpanText = $(closeSpan).children('span').text();
                that.options.data.splice($.inArray(closeSpanText, that.options.data), 1);
                that.onChange();
            }

            randomColor() {
                return this.options.theme[Math.floor(Math.random() * this.options.theme.length)];
            }

            spanHtml(value) {
                return '<span class="fairy-tag fairy-anim-fadein ' + this.randomColor() + '">' +
                    '<span>' + value + '</span>' +
                    (this.options.permanentData.includes(value) ? '' : '<a href="#" title="删除标签">&times;</a>') +
                    '</span>';
            }

            onChange() {
                this.options.onChange && typeof this.options.onChange === 'function' && this.options.onChange(this.options.data);
            }
        }

        return {
            render(options) {
                return new InputTag(options);
            }
        }
    });
}(typeof define === 'function' && define.amd ? define : function (deps, factory) {
    var MOD_NAME = 'inputTag';
    if (typeof module !== 'undefined' && module.exports) { //Node
        module.exports = factory(require('jquery'));
    } else if (window.layui && layui.define) {
        layui.define('jquery', function (exports) { //layui加载
            exports(MOD_NAME, factory(layui.jquery));
        });
    } else {
        window[MOD_NAME] = factory(window.jQuery);
    }
}));