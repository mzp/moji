import {css} from 'aphrodite/no-important';
import React from 'react';
import ReactCSSTransitionReplace from 'react-css-transition-replace';

const TRANSITION_TIME = 30000;
export default class extends React.Component {
  tick() {
    clearTimeout(this.state.timeoutId);
    const index = (this.state.index + 1) % React.Children.count(this.props.children);
    const timeoutId = setTimeout(this.tick.bind(this), TRANSITION_TIME);
    this.setState({ timeoutId, index });
  }

  componentWillMount() {
    const timeoutId = setTimeout(this.tick.bind(this), TRANSITION_TIME);
    this.setState({ timeoutId, index: 0 });
  }

  componentWillUnmount() {
    clearInterval(this.state.timeoutId);
  }

  render() {
    const content = React.Children.toArray(this.props.children);

    return (
      <ReactCSSTransitionReplace
        {...this.props}
        onClick={this.tick.bind(this)}>
         {content[this.state.index]}
      </ReactCSSTransitionReplace>);
  }
}
