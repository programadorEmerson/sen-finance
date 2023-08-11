import { styled } from 'styled-components';

export const StyledHeader = styled('header')`
  display: flex;
  padding: 40px;
  height: 212px;
  width: 100%;
  background-color: #121214;
  position: relative;

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    width: 30%;
    position: absolute;
    bottom: 40px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }

  .modal-close {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
  }

  .modal-content {
    margin-top: 10px;
  }

  .container-cards {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background-color: transparent;
    top: 65%;
    left: 50%;
    transform: translateX(-50%);
  }

  .container-menu {
    background-color: transparent;
    display: flex;
    width: 100%;
    align-items: flex-start;
    justify-content: space-between;

    .container-logo {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #121214;

      img {
        height: 50px;
        width: 50px;
      }
    }
    
    span {
      color: #fff;
      margin-left: 10px;
    }

    button {
      width: 152px;
      height: 40px;
      padding: 12px 20px 12px 20px;
      border-radius: 6px;
      border: none;
      gap: 10px;
      background-color: #00b894;
      cursor: pointer;
      transition: background-color 0.5s;
      color: #2d3436;
      font-weight: bold;

      &:hover {
        background-color: #55efc4;
      }
    }
  }
`;
