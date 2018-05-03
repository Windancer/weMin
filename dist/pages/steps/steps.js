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

var Steps = function (_wepy$page) {
  _inherits(Steps, _wepy$page);

  function Steps() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Steps);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Steps.__proto__ || Object.getPrototypeOf(Steps)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'steps',
      usingComponents: {
        'wxc-steps': '../../packages/@minui/wxc-steps/dist/index'
      }
    }, _this.data = {
      steps: [{
        title: '步骤1',
        desc: '注册，登录'
      }, {
        title: '步骤2',
        desc: '进入详情页，点击立即购买'
      }, {
        title: '步骤3',
        desc: '支付成功'
      }],
      current: 1
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Steps, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log('onLoad');
    }
  }]);

  return Steps;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Steps , 'pages/steps/steps'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0ZXBzLmpzIl0sIm5hbWVzIjpbIlN0ZXBzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJzdGVwcyIsInRpdGxlIiwiZGVzYyIsImN1cnJlbnQiLCJtZXRob2RzIiwiY29uc29sZSIsImxvZyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixPQURqQjtBQUVQQyx1QkFBaUI7QUFDZixxQkFBYTtBQURFO0FBRlYsSyxRQU1UQyxJLEdBQU87QUFDTEMsYUFBTyxDQUFDO0FBQ05DLGVBQU8sS0FERDtBQUVOQyxjQUFNO0FBRkEsT0FBRCxFQUdKO0FBQ0RELGVBQU8sS0FETjtBQUVEQyxjQUFNO0FBRkwsT0FISSxFQU1KO0FBQ0RELGVBQU8sS0FETjtBQUVEQyxjQUFNO0FBRkwsT0FOSSxDQURGO0FBV0xDLGVBQVM7QUFYSixLLFFBYVBDLE8sR0FBVSxFOzs7Ozs2QkFDRDtBQUNQQyxjQUFRQyxHQUFSLENBQVksUUFBWjtBQUNEOzs7O0VBdkJnQ0MsZUFBS0MsSTs7a0JBQW5CYixLIiwiZmlsZSI6InN0ZXBzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RlcHMgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdzdGVwcycsXG4gICAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICAgJ3d4Yy1zdGVwcyc6ICcuLi8uLi9wYWNrYWdlcy9AbWludWkvd3hjLXN0ZXBzL2Rpc3QvaW5kZXgnXG4gICAgICB9XG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICBzdGVwczogW3tcbiAgICAgICAgdGl0bGU6ICfmraXpqqQxJyxcbiAgICAgICAgZGVzYzogJ+azqOWGjO+8jOeZu+W9lSdcbiAgICAgIH0sIHtcbiAgICAgICAgdGl0bGU6ICfmraXpqqQyJyxcbiAgICAgICAgZGVzYzogJ+i/m+WFpeivpuaDhemhte+8jOeCueWHu+eri+WNs+i0reS5sCdcbiAgICAgIH0sIHtcbiAgICAgICAgdGl0bGU6ICfmraXpqqQzJyxcbiAgICAgICAgZGVzYzogJ+aUr+S7mOaIkOWKnydcbiAgICAgIH1dLFxuICAgICAgY3VycmVudDogMVxuICAgIH1cbiAgICBtZXRob2RzID0ge31cbiAgICBvbkxvYWQoKSB7XG4gICAgICBjb25zb2xlLmxvZygnb25Mb2FkJylcbiAgICB9XG4gIH1cblxuIl19