import React from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import Section from './Section';

class FeedbackCounter extends React.Component {
  static defaultProps = {
    initialBad: 0,
    initialGood: 0,
    initialNeutral: 0,
  };

  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
  };

  handleClickBtn = e => {
    const { name } = e.currentTarget;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const good = this.state.good;
    const neutral = this.state.neutral;
    const bad = this.state.bad;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const good = this.state.good;
    const neutral = this.state.neutral;
    const bad = this.state.bad;
    if (good === 0) {
      return 0;
    }
    return (good / (good + neutral + bad)) * 100;
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.handleClickBtn}
            options={['good', 'neutral', 'bad']}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default FeedbackCounter;
