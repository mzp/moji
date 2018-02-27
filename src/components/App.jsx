import {css} from 'aphrodite';
import React from 'react';
import Glyph from './Glyph';
import Info from './Info';
import Style from '../style';

export default class extends React.Component {
  render() {

    return (
      <div className={css(Style.row, Style.root)}>
        <Glyph className={css(Style.cell)} char="柿">
          <Info codepoint="U+67FF" name="KAKI" mean="Persimon" />
        </Glyph>
        <Glyph className={css(Style.cell)} char="杮">
          <Info codepoint="U+676E" name="KOKERA" mean="Wood board" />
        </Glyph>
      </div>
    );
  }
}
