import PropTypes from 'prop-types';
import { Button, OptionsList } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <OptionsList>
    {options.map(option => (
      <li key={option}>
        <Button type="button" name={option} onClick={onLeaveFeedback}>
          {option.toUpperCase()}
        </Button>
      </li>
    ))}
  </OptionsList>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
}

export default FeedbackOptions;
