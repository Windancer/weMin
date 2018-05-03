'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '非码点餐小程序',
      usingComponents: {
        'wxc-dialog': '../packages/@minui/wxc-dialog/dist/index',
        'wxc-icon': '../packages/@minui/wxc-icon/dist/index'
      }
    }, _this.data = {
      components: [{
        title: '基础元件',
        list: ['avatar', 'badge', 'elip', 'label', 'loadmore', 'price', 'progress']
      }, {
        title: '功能组件',
        list: ['abnor', 'countdown', 'counter', 'loading', 'mask', 'steps', 'tab']
      }, {
        title: '提示反馈',
        list: ['dialog', 'popup', 'toast']
      }]
    }, _this.methods = {
      toComponent: function toComponent(name) {
        this.$navigate('./' + name + '/' + name);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJjb21wb25lbnRzIiwidGl0bGUiLCJsaXN0IiwibWV0aG9kcyIsInRvQ29tcG9uZW50IiwibmFtZSIsIiRuYXZpZ2F0ZSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixTQURqQjtBQUVQQyx1QkFBaUI7QUFDZixzQkFBYywwQ0FEQztBQUVmLG9CQUFZO0FBRkc7QUFGVixLLFFBT1RDLEksR0FBTztBQUNMQyxrQkFBWSxDQUNWO0FBQ0VDLGVBQU8sTUFEVDtBQUVFQyxjQUFNLENBQUMsUUFBRCxFQUFXLE9BQVgsRUFBb0IsTUFBcEIsRUFBNEIsT0FBNUIsRUFBcUMsVUFBckMsRUFBaUQsT0FBakQsRUFBMEQsVUFBMUQ7QUFGUixPQURVLEVBSVA7QUFDREQsZUFBTyxNQUROO0FBRURDLGNBQU0sQ0FBQyxPQUFELEVBQVUsV0FBVixFQUF1QixTQUF2QixFQUFrQyxTQUFsQyxFQUE2QyxNQUE3QyxFQUFxRCxPQUFyRCxFQUE4RCxLQUE5RDtBQUZMLE9BSk8sRUFRVjtBQUNFRCxlQUFPLE1BRFQ7QUFFRUMsY0FBTSxDQUFDLFFBQUQsRUFBVyxPQUFYLEVBQW9CLE9BQXBCO0FBRlIsT0FSVTtBQURQLEssUUFlUEMsTyxHQUFVO0FBQ1JDLGlCQURRLHVCQUNJQyxJQURKLEVBQ1U7QUFDaEIsYUFBS0MsU0FBTCxRQUFvQkQsSUFBcEIsU0FBNEJBLElBQTVCO0FBQ0Q7QUFITyxLOzs7Ozs2QkFLRCxDQUFFOzs7O0VBNUJzQkUsZUFBS0MsSTs7a0JBQW5CYixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6Z2e56CB54K56aSQ5bCP56iL5bqPJyxcclxuICAgICAgdXNpbmdDb21wb25lbnRzOiB7XHJcbiAgICAgICAgJ3d4Yy1kaWFsb2cnOiAnLi4vcGFja2FnZXMvQG1pbnVpL3d4Yy1kaWFsb2cvZGlzdC9pbmRleCcsXHJcbiAgICAgICAgJ3d4Yy1pY29uJzogJy4uL3BhY2thZ2VzL0BtaW51aS93eGMtaWNvbi9kaXN0L2luZGV4J1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBjb21wb25lbnRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6ICfln7rnoYDlhYPku7YnLFxyXG4gICAgICAgICAgbGlzdDogWydhdmF0YXInLCAnYmFkZ2UnLCAnZWxpcCcsICdsYWJlbCcsICdsb2FkbW9yZScsICdwcmljZScsICdwcm9ncmVzcyddXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgdGl0bGU6ICflip/og73nu4Tku7YnLFxyXG4gICAgICAgICAgbGlzdDogWydhYm5vcicsICdjb3VudGRvd24nLCAnY291bnRlcicsICdsb2FkaW5nJywgJ21hc2snLCAnc3RlcHMnLCAndGFiJ11cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRpdGxlOiAn5o+Q56S65Y+N6aaIJyxcclxuICAgICAgICAgIGxpc3Q6IFsnZGlhbG9nJywgJ3BvcHVwJywgJ3RvYXN0J11cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH1cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIHRvQ29tcG9uZW50KG5hbWUpIHtcclxuICAgICAgICB0aGlzLiRuYXZpZ2F0ZShgLi8ke25hbWV9LyR7bmFtZX1gKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25Mb2FkKCkge31cclxuICB9XHJcblxyXG4iXX0=