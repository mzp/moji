import {css} from 'aphrodite';
import React from 'react';

import Style from '../style';

export default class extends React.PureComponent {
  render() {
    return (
      <div>
        <div className={css(Style.codepoint)}>{this.props.codepoint}</div>
        <div>{this.props.name}</div>
        <div className={css(Style.label)}>Definition</div>
        <div className={css(Style.mean)}>{this.props.mean}</div>
      </div>
    )
  }
}
