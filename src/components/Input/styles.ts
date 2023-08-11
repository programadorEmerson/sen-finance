import styled from 'styled-components';

export const StyledInput = styled('input')<{mt: number, valid: 'error' | 'valid'}>`
    padding: 10px;
    border: 2px solid ${({ valid }) => valid === 'error' ? '#EF5350' : '#ccc'};
    border-radius: 5px;
    font-size: 16px;
    color: rgba(0, 123, 255, 0.8);
    font-weight: bold;
    height: 55px;

    &:focus {
        outline: none;
        border-color: ${({ valid }) => valid === 'error' ? '#EF5350' : 'rgba(0, 123, 255, 0.8)'};
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }

    margin-top: ${({ mt }) => `${mt}px`};
`;
