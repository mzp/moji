import {css} from 'aphrodite';
import React from 'react';
import Glyph from './Glyph';
import Info from './Info';
import Style from '../style';

export default class extends React.Component {
  render() {
    return (
      <div className={css(Style.row, Style.root)}>
        {this.props.chars.map((char) => {
          return (
            <Glyph key={char.codepoint} className={css(Style.cell)} char={char.char}>
              <Info {...char} />
            </Glyph>
          )
        })}
      </div>
    );
  }
}
