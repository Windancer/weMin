'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Abnor = function (_wepy$page) {
  _inherits(Abnor, _wepy$page);

  function Abnor() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Abnor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Abnor.__proto__ || Object.getPrototypeOf(Abnor)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'abnor',
      usingComponents: {
        'wxc-abnor': '../../packages/@minui/wxc-abnor/dist/index'
      }
    }, _this.data = {
      image: 'https://s10.mogucdn.com/p2/161213/upload_76h1c5hjc8heecjehlfgekjdl2ki0_514x260.png',
      title: '自定义标题',
      tip: '自定义副标题',
      button: '点我'
    }, _this.methods = {
      showpopup: function showpopup(index) {
        var popupComponent = this.$wxpage.selectComponent('.wxc-popup' + index);
        popupComponent && popupComponent.show();
      },
      onCancel: function onCancel(index) {
        var popupComponent = this.$wxpage.selectComponent('.wxc-popup' + index);
        popupComponent && popupComponent.hide();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Abnor, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log('onLoad');
    }
  }]);

  return Abnor;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Abnor , 'pages/abnor/abnor'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFibm9yLmpzIl0sIm5hbWVzIjpbIkFibm9yIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJpbWFnZSIsInRpdGxlIiwidGlwIiwiYnV0dG9uIiwibWV0aG9kcyIsInNob3dwb3B1cCIsImluZGV4IiwicG9wdXBDb21wb25lbnQiLCIkd3hwYWdlIiwic2VsZWN0Q29tcG9uZW50Iiwic2hvdyIsIm9uQ2FuY2VsIiwiaGlkZSIsImNvbnNvbGUiLCJsb2ciLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsT0FEakI7QUFFUEMsdUJBQWlCO0FBQ2YscUJBQWE7QUFERTtBQUZWLEssUUFNVEMsSSxHQUFPO0FBQ0xDLGFBQU8sb0ZBREY7QUFFTEMsYUFBTyxPQUZGO0FBR0xDLFdBQUssUUFIQTtBQUlMQyxjQUFRO0FBSkgsSyxRQU1QQyxPLEdBQVU7QUFDUkMsZUFEUSxxQkFDRUMsS0FERixFQUNTO0FBQ2YsWUFBSUMsaUJBQWlCLEtBQUtDLE9BQUwsQ0FBYUMsZUFBYixDQUE2QixlQUFlSCxLQUE1QyxDQUFyQjtBQUNBQywwQkFBa0JBLGVBQWVHLElBQWYsRUFBbEI7QUFDRCxPQUpPO0FBS1JDLGNBTFEsb0JBS0NMLEtBTEQsRUFLUTtBQUNkLFlBQUlDLGlCQUFpQixLQUFLQyxPQUFMLENBQWFDLGVBQWIsQ0FBNkIsZUFBZUgsS0FBNUMsQ0FBckI7QUFDQUMsMEJBQWtCQSxlQUFlSyxJQUFmLEVBQWxCO0FBQ0Q7QUFSTyxLOzs7Ozs2QkFVRDtBQUNQQyxjQUFRQyxHQUFSLENBQVksUUFBWjtBQUNEOzs7O0VBekJnQ0MsZUFBS0MsSTs7a0JBQW5CckIsSyIsImZpbGUiOiJhYm5vci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEFibm9yIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnYWJub3InLFxuICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgICd3eGMtYWJub3InOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1hYm5vci9kaXN0L2luZGV4JyxcbiAgICAgIH1cbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIGltYWdlOiAnaHR0cHM6Ly9zMTAubW9ndWNkbi5jb20vcDIvMTYxMjEzL3VwbG9hZF83NmgxYzVoamM4aGVlY2plaGxmZ2VramRsMmtpMF81MTR4MjYwLnBuZycsXG4gICAgICB0aXRsZTogJ+iHquWumuS5ieagh+mimCcsXG4gICAgICB0aXA6ICfoh6rlrprkuYnlia/moIfpopgnLFxuICAgICAgYnV0dG9uOiAn54K55oiRJ1xuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgICAgc2hvd3BvcHVwKGluZGV4KSB7XG4gICAgICAgIGxldCBwb3B1cENvbXBvbmVudCA9IHRoaXMuJHd4cGFnZS5zZWxlY3RDb21wb25lbnQoJy53eGMtcG9wdXAnICsgaW5kZXgpO1xuICAgICAgICBwb3B1cENvbXBvbmVudCAmJiBwb3B1cENvbXBvbmVudC5zaG93KCk7XG4gICAgICB9LFxuICAgICAgb25DYW5jZWwoaW5kZXgpIHtcbiAgICAgICAgbGV0IHBvcHVwQ29tcG9uZW50ID0gdGhpcy4kd3hwYWdlLnNlbGVjdENvbXBvbmVudCgnLnd4Yy1wb3B1cCcgKyBpbmRleCk7XG4gICAgICAgIHBvcHVwQ29tcG9uZW50ICYmIHBvcHVwQ29tcG9uZW50LmhpZGUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgb25Mb2FkKCkge1xuICAgICAgY29uc29sZS5sb2coJ29uTG9hZCcpXG4gICAgfVxuICB9XG5cbiJdfQ==