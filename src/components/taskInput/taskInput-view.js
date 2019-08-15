import React from "react";
import PropTypes from "prop-types";
import theme from "../../styles/theme";
import styled from 'styled-components';

const Input = styled.input`
    padding: 16px 24px 16px 24px ;
    align-self: stretch;
    border-width: 2px;
    border-color: ${theme.COLORS.TEXT};
    border-radius: 16px;
    //height: 6rem;
`;

class Component extends React.PureComponent {
    render() {
        const {value, onValueChange} = this.props;
        return (<Input
            type="text"
            placeholder={'What is Your task ? …'}
            defaultValue={value}
            onChange={onValueChange}
            autoFocus={true}
            className="col-10 col-md-8 col-lg-6 pt-3 pb-5 pr-3 pl-3"
        />);
    }
}

Component.propTypes = {
    onValueChange: PropTypes.func,
    value: PropTypes.string,
};

Component.defaultProps = {
    onValueChange: (newV) => console.log(newV),
    value: '',
};

export default Component;
