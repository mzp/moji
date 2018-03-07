import {css} from 'aphrodite';
import React from 'react';
import Glyph from './Glyph';
import Style from '../style';
import Info from './Info';

export default class extends React.Component {
  render() {
    return <div className={css(Style.row)}>
      {this.props.row.map((char) => {
        return (
          <Glyph key={char.char}
                 className={css(Style.cell)}
                 char={char.char}
                 lang={char.lang}
                 isLargeFont={!this.props.isMultiRow}>
            <Info {...char} />
          </Glyph>
        )
      })}
    </div>
  }
}
