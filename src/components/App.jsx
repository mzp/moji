import {css} from 'aphrodite/no-important';
import React from 'react';
import Slide from './Slide';
import SlideShow from './SlideShow';
import Style from '../style';
import definitions from '../definitions';

export default class extends React.Component {
  render() {
    return (
      <div className={css(Style.root)}>
        <SlideShow transitionName='cross-fade' transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
          {definitions.map((definition) => {
            return (<Slide key={definition[0].codepoint} chars={definition} />);
          })}
        </SlideShow>
      </div>
    );
  }
}
