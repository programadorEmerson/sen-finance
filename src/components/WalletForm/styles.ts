import { styled } from 'styled-components';

export const StyledForm = styled('form')`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  margin-bottom: 05px;

  .content-form {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    max-width: 1100px;
    gap: 10px;
    position: relative;

    span {
      color: #c4c4cc;
      position: absolute;
      font-size: 15px;
      top: -25px;
      left: 5px;
    }

    button {
      background-color: #015f43;
      border: none;
      border-radius: 5px;
      color: #e1e1e6;
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;
