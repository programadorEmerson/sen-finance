import { styled } from 'styled-components';

export const StyledForm = styled('form')`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    align-items: center;
    justify-content: center;

    .cancel-button, .submit-button {
        background-color: #e73f5d !important;
        color: #fff !important;
        width: 100% !important;
    }
    .submit-button {
        background-color: #015F43 !important;
    }
`;
