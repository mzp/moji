import React from 'react';
import Glyph from './Glyph';

export default class extends React.Component {
  render() {
    return (
      <div>
        <Glyph char="柿" codepoint="U+67FF" name="KAKI" mean="Persimon" />
        <Glyph char="杮" codepoint="U+676E" name="KOKERA" mean="Wood board" />
      </div>
    );
  }
}
