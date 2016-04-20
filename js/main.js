'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// https://dribbble.com/shots/2658222

var pathLength = 39;

var BtnGroup = function () {
  function BtnGroup(group) {
    var _this = this;

    _classCallCheck(this, BtnGroup);

    this.buttonSpacing = 20;
    this.group = group;
    this.buttons = Array.prototype.slice.call(this.group.querySelectorAll('.btn'));
    this.slides = Array.prototype.slice.call(document.querySelectorAll('.slide'));
    this.slideContainer = document.querySelector('.slides');
    this.slideContainer.style.width = this.slides.length + '00vw';
    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.svg.setAttribute('viewbox', '0 0 ' + this.buttonSpacing * this.buttons.length + ' 16');
    this.path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    this.path.classList.add('line');
    this.currentPath = 'M ' + -this.buttonSpacing / 2 + ', 14';
    this.currentIndex = -1;
    this.activateIndex(this.buttons.indexOf(this.group.querySelector('.active')));
    this.group.appendChild(this.svg);
    this.svg.appendChild(this.path);
    this.refreshPath();
    this.initButtons();

    for (var _iterator = this.buttons, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var button = _ref;

      button.addEventListener('click', function (e) {
        return _this.onClick(e);
      });
    }
  }

  BtnGroup.prototype.initButtons = function initButtons() {
    for (var i = 0; i < this.buttons.length; i++) {
      var center = this.center(i);
      var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      var pathStr = '';
      pathStr += 'M' + center + ', 14 ';
      pathStr += 'C' + (center + 3) + ', 14 ';
      pathStr += center + 6 + ', 11 ';
      pathStr += center + 6 + ',  8 ';
      pathStr += 'C' + (center + 6) + ',  5 ';
      pathStr += center + 3 + ',  2 ';
      pathStr += center + ',  2 ';
      pathStr += 'C' + (center - 3) + ',  2 ';
      pathStr += center - 6 + ',  5 ';
      pathStr += center - 6 + ',  8 ';
      pathStr += 'C' + (center - 6) + ', 11 ';
      pathStr += center - 3 + ', 14 ';
      pathStr += center + ', 14 ';
      path.setAttributeNS(null, 'd', pathStr);
      path.classList.add('circle');
    }
  };

  BtnGroup.prototype.onClick = function onClick(e) {
    var index = this.buttons.indexOf(e.srcElement || e.target);
    this.activateIndex(index);
  };

  BtnGroup.prototype.refreshPath = function refreshPath() {
    this.path.setAttributeNS(null, 'd', this.currentPath);
    this.path.style.strokeDashoffset = (-this.path.getTotalLength() + pathLength) * 0.9965;
  };

  BtnGroup.prototype.center = function center(index) {
    return index * this.buttonSpacing + this.buttonSpacing / 2;
  };

  BtnGroup.prototype.removeClass = function removeClass(str) {
    if (this.buttons[this.currentIndex]) {
      this.buttons[this.currentIndex].classList.remove(str);
    }
  };

  BtnGroup.prototype.addClass = function addClass(str) {
    if (this.buttons[this.currentIndex]) {
      this.buttons[this.currentIndex].classList.add(str);
    }
  };

  BtnGroup.prototype.activateIndex = function activateIndex(index) {
    this.slideContainer.style.left = -index + '00vw';
    var lastCenter = this.center(this.currentIndex);
    var nextCenter = this.center(index);
    var offset = 0;
    var sign = index < this.currentIndex ? -1 : 1;
    this.currentPath += 'C' + (lastCenter + sign * 3) + ', 14 ';
    this.currentPath += lastCenter + sign * 6 + ', 11 ';
    this.currentPath += lastCenter + sign * 6 + ',  8 ';
    this.currentPath += 'C' + (lastCenter + sign * 6) + ',  5 ';
    this.currentPath += lastCenter + sign * 3 + ',  2 ';
    this.currentPath += lastCenter + ',  2 ';
    this.currentPath += 'C' + (lastCenter - sign * 3) + ',  2 ';
    this.currentPath += lastCenter - sign * 6 + ',  5 ';
    this.currentPath += lastCenter - sign * 6 + ',  8 ';
    this.currentPath += 'C' + (lastCenter - sign * 6) + ', 11 ';
    this.currentPath += lastCenter - sign * 3 + ', 14 ';
    this.currentPath += lastCenter + ', 14 ';
    this.currentPath += 'L' + nextCenter + ', 14 ';
    this.currentPath += 'C' + (nextCenter + sign * 3) + ', 14 ';
    this.currentPath += nextCenter + sign * 6 + ', 11 ';
    this.currentPath += nextCenter + sign * 6 + ',  8 ';
    this.currentPath += 'C' + (nextCenter + sign * 6) + ',  5 ';
    this.currentPath += nextCenter + sign * 3 + ',  2 ';
    this.currentPath += nextCenter + ',  2 ';
    this.currentPath += 'C' + (nextCenter - sign * 3) + ',  2 ';
    this.currentPath += nextCenter - sign * 6 + ',  5 ';
    this.currentPath += nextCenter - sign * 6 + ',  8 ';
    this.currentPath += 'C' + (nextCenter - sign * 6) + ', 11 ';
    this.currentPath += nextCenter - sign * 3 + ', 14 ';
    this.currentPath += nextCenter + ', 14 ';
    this.removeClass('active');
    this.currentIndex = index;
    this.addClass('active');
    this.refreshPath();
  };

  return BtnGroup;
}();

var groups = Array.prototype.slice.call(document.querySelectorAll('.btn-group'));

for (var _iterator2 = groups, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
  var _ref2;

  if (_isArray2) {
    if (_i2 >= _iterator2.length) break;
    _ref2 = _iterator2[_i2++];
  } else {
    _i2 = _iterator2.next();
    if (_i2.done) break;
    _ref2 = _i2.value;
  }

  var group = _ref2;

  console.log(new BtnGroup(group));
}
 // text
	//define text

	$(function() {
					$(".pro").typed({
									strings: ["Designer", "Developer", ],
									typeSpeed: 100,
									loop: true,
									backDelay: 1000,
					});
	});
	window.sr = ScrollReveal().reveal('.portfolio, .skills,.foot,.about,.view');
	smoothScroll.init();


 // jsd
 
