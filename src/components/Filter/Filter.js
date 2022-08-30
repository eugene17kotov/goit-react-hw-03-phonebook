import PropTypes from 'prop-types';
import { Component } from 'react';
import { StyledLabel, StyledInput } from 'components/Filter/Filter.styled';
import { Box } from 'utils/Box';

export class Filter extends Component {
  static propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  render() {
    const { filter, onChange } = this.props;

    return (
      <Box mb={4} mt={4}>
        <StyledLabel>
          Find contacts by name
          <StyledInput
            type="text"
            name="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={filter}
            onChange={onChange}
          />
        </StyledLabel>
      </Box>
    );
  }
}
