import PropTypes from 'prop-types';
import { StyledButton } from 'components/Button/Button.styled';

export function Button({ title, type, onClick }) {
  return (
    <StyledButton type={type} onClick={onClick}>
      {title}
    </StyledButton>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
