'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMixin = require('react-mixin');

var _reactMixin2 = _interopRequireDefault(_reactMixin);

var _mixins = require('./mixins');

var _utilsHexToRgb = require('../../utils/hexToRgb');

var _utilsHexToRgb2 = _interopRequireDefault(_utilsHexToRgb);

var styles = {
  base: {
    paddingTop: 3,
    paddingBottom: 3,
    paddingRight: 0,
    marginLeft: 14
  },
  label: {
    display: 'inline-block',
    marginRight: 5
  }
};

var JSONStringNode = (function (_React$Component) {
  _inherits(JSONStringNode, _React$Component);

  function JSONStringNode() {
    _classCallCheck(this, _JSONStringNode);

    _React$Component.apply(this, arguments);
  }

  JSONStringNode.prototype.render = function render() {
    var backgroundColor = 'transparent';
    if (this.props.previousValue !== this.props.value) {
      var bgColor = _utilsHexToRgb2['default'](this.props.theme.base06);
      backgroundColor = 'rgba(' + bgColor.r + ', ' + bgColor.g + ', ' + bgColor.b + ', 0.1)';
    }
    return _react2['default'].createElement(
      'li',
      { style: _extends({}, styles.base, { backgroundColor: backgroundColor }), onClick: this.handleClick.bind(this) },
      _react2['default'].createElement(
        'label',
        { style: _extends({}, styles.label, {
            color: this.props.theme.base0D
          }) },
        this.props.keyName,
        ':'
      ),
      _react2['default'].createElement(
        'span',
        { style: { color: this.props.theme.base0B } },
        '"',
        this.props.value,
        '"'
      )
    );
  };

  var _JSONStringNode = JSONStringNode;
  JSONStringNode = _reactMixin2['default'].decorate(_mixins.SquashClickEventMixin)(JSONStringNode) || JSONStringNode;
  return JSONStringNode;
})(_react2['default'].Component);

exports['default'] = JSONStringNode;
module.exports = exports['default'];