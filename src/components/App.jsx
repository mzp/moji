import {css} from 'aphrodite/no-important';
import React from 'react';
import Slide from './Slide';
import SlideShow from './SlideShow';
import Style from '../style';

const slides = [
  [
    { char: '柿', codepoint: 'U+67FF', name: 'KAKI', mean: 'Persimon' },
    { char: '杮', codepoint: 'U+676E', name: 'KOKERA', mean: 'Wood board' }
  ],
  [
    { char: '高', codepoint: 'U+9AD8', name: 'KUCHI-DAKA', mean: 'High' },
    { char: '髙', codepoint: 'U+9AD9', name: 'HASHIGO-DAKA', mean: 'High' }

  ]
];

export default class extends React.Component {
  render() {

    return (
      <div className={css(Style.root)}>
        <SlideShow transitionName='cross-fade' transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
          {slides.map((slide) => {
            return (<Slide key={slide[0].codepoint} chars={slide} />);
          })}
        </SlideShow>
      </div>
    );
  }
}
