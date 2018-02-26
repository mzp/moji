import React from 'react';

export default class extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="glyph_char">{this.props.char}</div>
        <div className="glyph_info info" >
          <div className="info_codepoint">{this.props.codepoint}</div>
          <div className="info_name">{this.props.name}</div>
          <div className="info_label">Definition</div>
          <div className="info_mean">{this.props.mean}</div>
        </div>
      </div>
    );
  }
}
