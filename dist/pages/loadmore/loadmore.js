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

var Loadmore = function (_wepy$page) {
  _inherits(Loadmore, _wepy$page);

  function Loadmore() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Loadmore);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Loadmore.__proto__ || Object.getPrototypeOf(Loadmore)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'Loadmore',
      usingComponents: {
        'wxc-loadmore': '../../packages/@minui/wxc-loadmore/dist/index'
      }
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Loadmore, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log('onLoad');
    }
  }]);

  return Loadmore;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Loadmore , 'pages/loadmore/loadmore'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRtb3JlLmpzIl0sIm5hbWVzIjpbIkxvYWRtb3JlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsIm1ldGhvZHMiLCJjb25zb2xlIiwibG9nIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLFVBRGpCO0FBRVBDLHVCQUFpQjtBQUNmLHdCQUFnQjtBQUREO0FBRlYsSyxRQU1UQyxPLEdBQVUsRTs7Ozs7NkJBQ0Q7QUFDUEMsY0FBUUMsR0FBUixDQUFZLFFBQVo7QUFDRDs7OztFQVZtQ0MsZUFBS0MsSTs7a0JBQXRCUixRIiwiZmlsZSI6ImxvYWRtb3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZG1vcmUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdMb2FkbW9yZScsXG4gICAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICAgJ3d4Yy1sb2FkbW9yZSc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLWxvYWRtb3JlL2Rpc3QvaW5kZXgnLFxuICAgICAgfVxuICAgIH1cbiAgICBtZXRob2RzID0ge31cbiAgICBvbkxvYWQoKSB7XG4gICAgICBjb25zb2xlLmxvZygnb25Mb2FkJylcbiAgICB9XG4gIH1cblxuIl19