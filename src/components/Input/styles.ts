import styled from 'styled-components';

export const StyledInput = styled.input<{other: boolean}>`
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    width: 100%;
    color: rgba(0, 123, 255, 0.8);
    font-weight: bold;
    height: 55px;

    &:focus {
        outline: none;
        border-color: #007bff;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }

    margin-top: ${({ other }) => (other ? '10px' : '0')};
`;
