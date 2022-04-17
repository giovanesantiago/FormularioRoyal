'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports['default'] = persistState;

function persistState(sessionId) {
  if (!sessionId) {
    return function (next) {
      return function () {
        return next.apply(undefined, arguments);
      };
    };
  }

  return function (next) {
    return function (reducer, initialState) {
      var key = 'redux-dev-session-' + sessionId;

      var finalInitialState = undefined;
      try {
        finalInitialState = JSON.parse(localStorage.getItem(key)) || initialState;
        next(reducer, initialState);
      } catch (e) {
        console.warn('Could not read debug session from localStorage:', e);
        try {
          localStorage.removeItem(key);
        } finally {
          finalInitialState = undefined;
        }
      }

      var store = next(reducer, finalInitialState);

      return _extends({}, store, {
        dispatch: function dispatch(action) {
          store.dispatch(action);

          try {
            localStorage.setItem(key, JSON.stringify(store.getState()));
          } catch (e) {
            console.warn('Could not write debug session from localStorage:', e);
          }

          return action;
        }
      });
    };
  };
}

module.exports = exports['default'];