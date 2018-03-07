import {css} from 'aphrodite';
import React from 'react';
import Glyph from './Glyph';
import Row from './Row';
import Style from '../style';
import split from '../split';

export default class extends React.Component {
  rows() {
    const length = this.props.chars.length;

    if (length <= 3) {
      return [this.props.chars]
    } else {
      return split(this.props.chars, Math.ceil(length / 2));
    }
  }

  render() {
    const rows = this.rows();
    const isMultiRow = rows.length > 1;
    return (
      <div className={css(Style.root)} style={this.props.color}>
        <div className={css(Style.center)}>
          {rows.map((row, i) => {
            return <Row key={i} row={row} isMultiRow={isMultiRow} />
          })}
        </div>
      </div>
    );
  }
}
