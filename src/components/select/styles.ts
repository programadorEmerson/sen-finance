import styled from 'styled-components';

export const StyledInputSelect = styled('select')`
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    color: rgba(0, 123, 255, 0.8);
    font-weight: bold;
    height: 55px;

    &:focus {
        outline: none;
        border-color: rgba(0, 123, 255, 0.8);
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }

    margin-top: 3px;
`;
