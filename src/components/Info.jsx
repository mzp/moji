import {css} from 'aphrodite';
import React from 'react';

import Style from '../style';

export default class extends React.PureComponent {
  get codepoint() {
    return `U+${this.format(this.charCode)}`
  }

  format(n) {
    const str = n.toString(16).toUpperCase();
    const padding = 4 - str.length;

    if(padding > 0) {
      return '0'.repeat(padding) + str;
    } else {
      return str
    }
  }

  get charCode() {
    const { char } = this.props;
    if (char.length == 1) {
      return char.charCodeAt(0);
    } else {
      const hi = char.charCodeAt(0);
      const lo = char.charCodeAt(1);

      return 0x10000 + (hi - 0xD800) * 0x400 + (lo - 0xDC00);
    }
  }

  render() {
    return (
      <div>
        <div className={css(Style.codepoint)}>{this.codepoint}</div>
        <div>{this.props.name}</div>
        <div className={css(Style.label)}>Definition</div>
        <div className={css(Style.mean)}>{this.props.mean}</div>
      </div>
    )
  }
}
