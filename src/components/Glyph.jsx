import {css} from 'aphrodite';
import React from 'react';

import Style from '../style';

export default class extends React.PureComponent {
  render() {
    return (
      <div className={this.props.className}>
        <div className={css(Style.glyph, this.props.isLargeFont ? Style.large : Style.medium)} lang={this.props.lang}>
          {this.props.char}
        </div>
        <div className={css(Style.info)}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
