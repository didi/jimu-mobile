'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
                                                                                                                                                                                                                              * Created by jf on 15/10/27.
                                                                                                                                                                                                                              */

var propTypes = {
  type: _propTypes2.default.string,
  href: _propTypes2.default.string,
  iconClassName: _propTypes2.default.string,
  iconFloat: _propTypes2.default.string
};

var defaultProps = {
  type: '', // normal 普通  ， danger 危险提示 ，disabled 禁止
  href: '',
  iconClassName: '',
  iconFloat: 'left'
};

var TextLink = function TextLink(props) {
  var type = props.type,
      className = props.className,
      iconFloat = props.iconFloat,
      children = props.children,
      iconClassName = props.iconClassName,
      others = _objectWithoutProperties(props, ['type', 'className', 'iconFloat', 'children', 'iconClassName']);

  var Component = props.href ? 'a' : 'span';
  var cls = (0, _classnames2.default)(_defineProperty({
    'pile-link': true,
    'pile-link-normal': type === 'normal',
    'pile-link-danger': type === 'danger',
    'pile-link-disabled': type === 'disabled',
    'pile-link-left': iconFloat === 'left' && iconClassName,
    'pile-link-right': iconFloat === 'right' && iconClassName
  }, className, className));

  return _react2.default.createElement(
    Component,
    _extends({}, others, { className: cls }),
    iconClassName && iconFloat === 'left' && _react2.default.createElement('i', { className: iconClassName }),
    children,
    iconClassName && iconFloat === 'right' && _react2.default.createElement('i', { className: iconClassName })
  );
};

TextLink.propTypes = propTypes;
TextLink.defaultProps = defaultProps;

exports.default = TextLink;