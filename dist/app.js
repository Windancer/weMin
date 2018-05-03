'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_wepy$app) {
  _inherits(_class, _wepy$app);

  function _class() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _class);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      pages: ['pages/index', 'pages/avatar/avatar', 'pages/badge/badge', 'pages/elip/elip', 'pages/label/label', 'pages/loadmore/loadmore', 'pages/price/price', 'pages/progress/progress', 'pages/dialog/dialog', 'pages/popup/popup', 'pages/toast/toast', 'pages/abnor/abnor', 'pages/countdown/countdown', 'pages/counter/counter', 'pages/loading/loading', 'pages/mask/mask', 'pages/steps/steps', 'pages/tab/tab'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_class, [{
    key: 'onLaunch',
    value: function onLaunch() {
      console.log('on launch');
    }
  }]);

  return _class;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_class, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJjb25zb2xlIiwibG9nIiwid2VweSIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0xBR0VBLE0sR0FBUztBQUNQQyxhQUFPLENBQ0wsYUFESyxFQUVMLHFCQUZLLEVBR0wsbUJBSEssRUFJTCxpQkFKSyxFQUtMLG1CQUxLLEVBTUwseUJBTkssRUFPTCxtQkFQSyxFQVFMLHlCQVJLLEVBU0wscUJBVEssRUFVTCxtQkFWSyxFQVdMLG1CQVhLLEVBWUwsbUJBWkssRUFhTCwyQkFiSyxFQWNMLHVCQWRLLEVBZUwsdUJBZkssRUFnQkwsaUJBaEJLLEVBaUJMLG1CQWpCSyxFQWtCTCxlQWxCSyxDQURBO0FBcUJQQyxjQUFRO0FBQ05DLDZCQUFxQixPQURmO0FBRU5DLHNDQUE4QixNQUZ4QjtBQUdOQyxnQ0FBd0IsUUFIbEI7QUFJTkMsZ0NBQXdCO0FBSmxCO0FBckJELEs7Ozs7OytCQTZCRTtBQUNUQyxjQUFRQyxHQUFSLENBQVksV0FBWjtBQUNEOzs7O0VBaEMwQkMsZUFBS0MsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgcGFnZXM6IFtcclxuICAgICAgICAncGFnZXMvaW5kZXgnLFxyXG4gICAgICAgICdwYWdlcy9hdmF0YXIvYXZhdGFyJyxcclxuICAgICAgICAncGFnZXMvYmFkZ2UvYmFkZ2UnLFxyXG4gICAgICAgICdwYWdlcy9lbGlwL2VsaXAnLFxyXG4gICAgICAgICdwYWdlcy9sYWJlbC9sYWJlbCcsXHJcbiAgICAgICAgJ3BhZ2VzL2xvYWRtb3JlL2xvYWRtb3JlJyxcclxuICAgICAgICAncGFnZXMvcHJpY2UvcHJpY2UnLFxyXG4gICAgICAgICdwYWdlcy9wcm9ncmVzcy9wcm9ncmVzcycsXHJcbiAgICAgICAgJ3BhZ2VzL2RpYWxvZy9kaWFsb2cnLFxyXG4gICAgICAgICdwYWdlcy9wb3B1cC9wb3B1cCcsXHJcbiAgICAgICAgJ3BhZ2VzL3RvYXN0L3RvYXN0JyxcclxuICAgICAgICAncGFnZXMvYWJub3IvYWJub3InLFxyXG4gICAgICAgICdwYWdlcy9jb3VudGRvd24vY291bnRkb3duJyxcclxuICAgICAgICAncGFnZXMvY291bnRlci9jb3VudGVyJyxcclxuICAgICAgICAncGFnZXMvbG9hZGluZy9sb2FkaW5nJyxcclxuICAgICAgICAncGFnZXMvbWFzay9tYXNrJyxcclxuICAgICAgICAncGFnZXMvc3RlcHMvc3RlcHMnLFxyXG4gICAgICAgICdwYWdlcy90YWIvdGFiJyxcclxuICAgICAgXSxcclxuICAgICAgd2luZG93OiB7XHJcbiAgICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcclxuICAgICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ1dlQ2hhdCcsXHJcbiAgICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25MYXVuY2goKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdvbiBsYXVuY2gnKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiJdfQ==