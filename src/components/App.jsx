import React from 'react';
import Slide from './Slide';
import SlideShow from './SlideShow';
import definitions from '../definitions';
import colors from '../colors';
import combine from '../combine';

export default class extends React.Component {
  componentWillMount() {
    this.slides = combine(definitions, colors);
  }

  render() {
    return (
      <div>
        <SlideShow transitionName='cross-fade' transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
          {this.slides.map(([definition, color]) => {
            return (<Slide key={definition[0].codepoint} chars={definition} color={color} />);
          })}
        </SlideShow>
      </div>
    );
  }
}
