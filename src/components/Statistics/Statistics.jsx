import PropTypes from 'prop-types';
import { StatsInfo } from './Statistics.styled';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <StatsInfo>Good: {good}</StatsInfo>
      <StatsInfo>Neutral: {neutral}</StatsInfo>
      <StatsInfo>Bad: {bad}</StatsInfo>
      <StatsInfo>Total: {total}</StatsInfo>
      <StatsInfo>Positive feedback: {positivePercentage}%</StatsInfo>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
