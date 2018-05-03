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

var Countdow = function (_wepy$page) {
  _inherits(Countdow, _wepy$page);

  function Countdow() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Countdow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Countdow.__proto__ || Object.getPrototypeOf(Countdow)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'countdown',
      usingComponents: {
        'wxc-countdown': '../../packages/@minui/wxc-countdown/dist/index'
      }
    }, _this.data = {
      countdown: 10000,
      format: 'hh:mm:ss',
      countdown2: 5,
      computeTime: 5,
      isEnd: false,
      numStyle: 'width: 48rpx; font-size: 28rpx; color: #ffffff; background: #000; text-align: center; border-radius: 8rpx; padding: 5rpx 0;',
      symbolStyle: 'font-size: 28rpx; color: #000; padding: 0 12rpx;'
    }, _this.methods = {
      onRunCount: function onRunCount(e) {
        var detail = e.detail;
        this.computeTime = detail.computeTime;
      },
      onEndCount: function onEndCount() {
        this.isEnd = true;
      },
      countAgain: function countAgain() {
        var countdown = this.countdown2 + 1;
        if (this.isEnd) {
          this.countdown2 = countdown;
          this.isEnd = false;
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Countdow, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log('onLoad');
    }
  }]);

  return Countdow;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Countdow , 'pages/countdown/countdown'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50ZG93bi5qcyJdLCJuYW1lcyI6WyJDb3VudGRvdyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCJkYXRhIiwiY291bnRkb3duIiwiZm9ybWF0IiwiY291bnRkb3duMiIsImNvbXB1dGVUaW1lIiwiaXNFbmQiLCJudW1TdHlsZSIsInN5bWJvbFN0eWxlIiwibWV0aG9kcyIsIm9uUnVuQ291bnQiLCJlIiwiZGV0YWlsIiwib25FbmRDb3VudCIsImNvdW50QWdhaW4iLCJjb25zb2xlIiwibG9nIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLFdBRGpCO0FBRVBDLHVCQUFpQjtBQUNmLHlCQUFpQjtBQURGO0FBRlYsSyxRQU1UQyxJLEdBQU87QUFDTEMsaUJBQVcsS0FETjtBQUVMQyxjQUFRLFVBRkg7QUFHTEMsa0JBQVksQ0FIUDtBQUlMQyxtQkFBYSxDQUpSO0FBS0xDLGFBQU8sS0FMRjtBQU1MQyxnQkFBVSw2SEFOTDtBQU9MQyxtQkFBYTtBQVBSLEssUUFTUEMsTyxHQUFVO0FBQ1JDLGdCQURRLHNCQUNHQyxDQURILEVBQ007QUFDWixZQUFJQyxTQUFTRCxFQUFFQyxNQUFmO0FBQ0EsYUFBS1AsV0FBTCxHQUFtQk8sT0FBT1AsV0FBMUI7QUFDRCxPQUpPO0FBS1JRLGdCQUxRLHdCQUtLO0FBQ1gsYUFBS1AsS0FBTCxHQUFhLElBQWI7QUFDRCxPQVBPO0FBUVJRLGdCQVJRLHdCQVFLO0FBQ1gsWUFBSVosWUFBWSxLQUFLRSxVQUFMLEdBQWtCLENBQWxDO0FBQ0EsWUFBSSxLQUFLRSxLQUFULEVBQWdCO0FBQ2QsZUFBS0YsVUFBTCxHQUFrQkYsU0FBbEI7QUFDQSxlQUFLSSxLQUFMLEdBQWEsS0FBYjtBQUNEO0FBQ0Y7QUFkTyxLOzs7Ozs2QkFnQkQ7QUFDUFMsY0FBUUMsR0FBUixDQUFZLFFBQVo7QUFDRDs7OztFQWxDbUNDLGVBQUtDLEk7O2tCQUF0QnJCLFEiLCJmaWxlIjoiY291bnRkb3duLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ291bnRkb3cgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdjb3VudGRvd24nLFxuICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgICd3eGMtY291bnRkb3duJzogJy4uLy4uL3BhY2thZ2VzL0BtaW51aS93eGMtY291bnRkb3duL2Rpc3QvaW5kZXgnXG4gICAgICB9XG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBjb3VudGRvd246IDEwMDAwLFxuICAgICAgZm9ybWF0OiAnaGg6bW06c3MnLFxuICAgICAgY291bnRkb3duMjogNSxcbiAgICAgIGNvbXB1dGVUaW1lOiA1LFxuICAgICAgaXNFbmQ6IGZhbHNlLFxuICAgICAgbnVtU3R5bGU6ICd3aWR0aDogNDhycHg7IGZvbnQtc2l6ZTogMjhycHg7IGNvbG9yOiAjZmZmZmZmOyBiYWNrZ3JvdW5kOiAjMDAwOyB0ZXh0LWFsaWduOiBjZW50ZXI7IGJvcmRlci1yYWRpdXM6IDhycHg7IHBhZGRpbmc6IDVycHggMDsnLFxuICAgICAgc3ltYm9sU3R5bGU6ICdmb250LXNpemU6IDI4cnB4OyBjb2xvcjogIzAwMDsgcGFkZGluZzogMCAxMnJweDsnXG4gICAgfVxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBvblJ1bkNvdW50KGUpIHtcbiAgICAgICAgbGV0IGRldGFpbCA9IGUuZGV0YWlsXG4gICAgICAgIHRoaXMuY29tcHV0ZVRpbWUgPSBkZXRhaWwuY29tcHV0ZVRpbWVcbiAgICAgIH0sXG4gICAgICBvbkVuZENvdW50KCkge1xuICAgICAgICB0aGlzLmlzRW5kID0gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICBjb3VudEFnYWluKCkge1xuICAgICAgICBsZXQgY291bnRkb3duID0gdGhpcy5jb3VudGRvd24yICsgMVxuICAgICAgICBpZiAodGhpcy5pc0VuZCkge1xuICAgICAgICAgIHRoaXMuY291bnRkb3duMiA9IGNvdW50ZG93bjtcbiAgICAgICAgICB0aGlzLmlzRW5kID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgb25Mb2FkKCkge1xuICAgICAgY29uc29sZS5sb2coJ29uTG9hZCcpXG4gICAgfVxuICB9XG5cbiJdfQ==