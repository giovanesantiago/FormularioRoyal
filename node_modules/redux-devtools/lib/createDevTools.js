'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

exports['default'] = createDevTools;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _reactReduxLibComponentsCreateAll = require('react-redux/lib/components/createAll');

var _reactReduxLibComponentsCreateAll2 = _interopRequireDefault(_reactReduxLibComponentsCreateAll);

var _devTools = require('./devTools');

function createDevTools(React) {
  var PropTypes = React.PropTypes;
  var Component = React.Component;

  var _createAll = _reactReduxLibComponentsCreateAll2['default'](React);

  var Provider = _createAll.Provider;
  var connect = _createAll.connect;

  var DevTools = (function (_Component) {
    _inherits(DevTools, _Component);

    function DevTools() {
      _classCallCheck(this, _DevTools);

      _Component.apply(this, arguments);
    }

    DevTools.prototype.render = function render() {
      var Monitor = this.props.monitor;

      return React.createElement(Monitor, this.props);
    };

    var _DevTools = DevTools;
    DevTools = connect(function (state) {
      return state;
    }, _devTools.ActionCreators)(DevTools) || DevTools;
    return DevTools;
  })(Component);

  return (function (_Component2) {
    _inherits(DevToolsWrapper, _Component2);

    _createClass(DevToolsWrapper, null, [{
      key: 'propTypes',
      value: {
        monitor: PropTypes.func.isRequired,
        store: PropTypes.shape({
          devToolsStore: PropTypes.shape({
            dispatch: PropTypes.func.isRequired
          }).isRequired
        }).isRequired
      },
      enumerable: true
    }]);

    function DevToolsWrapper(props, context) {
      _classCallCheck(this, DevToolsWrapper);

      if (props.store && !props.store.devToolsStore) {
        console.error('Could not find the devTools store inside your store. ' + 'Have you applied devTools() higher-order store?');
      }
      _Component2.call(this, props, context);
      this.renderDevTools = this.renderDevTools.bind(this);
    }

    DevToolsWrapper.prototype.render = function render() {
      var devToolsStore = this.props.store.devToolsStore;

      return React.createElement(
        Provider,
        { store: devToolsStore },
        this.renderDevTools
      );
    };

    DevToolsWrapper.prototype.renderDevTools = function renderDevTools() {
      var _props = this.props;
      var store = _props.store;

      var rest = _objectWithoutProperties(_props, ['store']);

      return React.createElement(DevTools, rest);
    };

    return DevToolsWrapper;
  })(Component);
}

module.exports = exports['default'];