import PropTypes from 'prop-types';
import { MessageText } from './Notification.styled';

export function Notification({ message }) {
  return <MessageText>{message}</MessageText>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
