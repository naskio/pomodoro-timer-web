import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    font-size: 1.2em;
    text-align: center;
    color: palevioletred;
`;

export default class View extends React.PureComponent {
    render() {
        return (
            <Div>
                By Mehdi Nassim KHODJA
            </Div>
        );
    }
}
