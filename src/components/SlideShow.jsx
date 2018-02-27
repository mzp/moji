import {css} from 'aphrodite/no-important';
import React from 'react';
import ReactCSSTransitionReplace from 'react-css-transition-replace';

export default class extends React.Component {
  tick() {
    const index = (this.state.index + 1) % React.Children.count(this.props.children);
    this.setState({ index });
  }

  componentWillMount() {
    const intervalId = setInterval(this.tick.bind(this), 30000);
    this.setState({ intervalId, index: 0 });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
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
