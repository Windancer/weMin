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

var Loading = function (_wepy$page) {
  _inherits(Loading, _wepy$page);

  function Loading() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Loading);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Loading.__proto__ || Object.getPrototypeOf(Loading)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'loading',
      usingComponents: {
        'wxc-loading': '../../packages/@minui/wxc-loading/dist/index'
      }
    }, _this.data = {}, _this.methods = {
      showLoading: function showLoading(index) {
        var loadingComponent = this.$wxpage.selectComponent('.wxc-loading' + index);
        loadingComponent && loadingComponent.show();

        setTimeout(function () {
          loadingComponent && loadingComponent.hide();
        }, 2000);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Loading, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log('onLoad');
    }
  }]);

  return Loading;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Loading , 'pages/loading/loading'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmcuanMiXSwibmFtZXMiOlsiTG9hZGluZyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCJkYXRhIiwibWV0aG9kcyIsInNob3dMb2FkaW5nIiwiaW5kZXgiLCJsb2FkaW5nQ29tcG9uZW50IiwiJHd4cGFnZSIsInNlbGVjdENvbXBvbmVudCIsInNob3ciLCJzZXRUaW1lb3V0IiwiaGlkZSIsImNvbnNvbGUiLCJsb2ciLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxPOzs7Ozs7Ozs7Ozs7Ozt3TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsU0FEakI7QUFFUEMsdUJBQWlCO0FBQ2YsdUJBQWU7QUFEQTtBQUZWLEssUUFNVEMsSSxHQUFPLEUsUUFDUEMsTyxHQUFVO0FBQ1JDLGlCQURRLHVCQUNJQyxLQURKLEVBQ1c7QUFDakIsWUFBSUMsbUJBQW1CLEtBQUtDLE9BQUwsQ0FBYUMsZUFBYixDQUE2QixpQkFBaUJILEtBQTlDLENBQXZCO0FBQ0FDLDRCQUFvQkEsaUJBQWlCRyxJQUFqQixFQUFwQjs7QUFFQUMsbUJBQVcsWUFBTTtBQUNmSiw4QkFBb0JBLGlCQUFpQkssSUFBakIsRUFBcEI7QUFDRCxTQUZELEVBRUcsSUFGSDtBQUdEO0FBUk8sSzs7Ozs7NkJBVUQ7QUFDUEMsY0FBUUMsR0FBUixDQUFZLFFBQVo7QUFDRDs7OztFQXBCa0NDLGVBQUtDLEk7O2tCQUFyQmpCLE8iLCJmaWxlIjoibG9hZGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRpbmcgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdsb2FkaW5nJyxcbiAgICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgICAnd3hjLWxvYWRpbmcnOiAnLi4vLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1sb2FkaW5nL2Rpc3QvaW5kZXgnXG4gICAgICB9XG4gICAgfVxuICAgIGRhdGEgPSB7fVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBzaG93TG9hZGluZyhpbmRleCkge1xuICAgICAgICBsZXQgbG9hZGluZ0NvbXBvbmVudCA9IHRoaXMuJHd4cGFnZS5zZWxlY3RDb21wb25lbnQoJy53eGMtbG9hZGluZycgKyBpbmRleCk7XG4gICAgICAgIGxvYWRpbmdDb21wb25lbnQgJiYgbG9hZGluZ0NvbXBvbmVudC5zaG93KCk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgbG9hZGluZ0NvbXBvbmVudCAmJiBsb2FkaW5nQ29tcG9uZW50LmhpZGUoKTtcbiAgICAgICAgfSwgMjAwMCk7XG4gICAgICB9XG4gICAgfVxuICAgIG9uTG9hZCgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdvbkxvYWQnKVxuICAgIH1cbiAgfVxuXG4iXX0=