import { styled } from 'styled-components';

import ImagesEnum from '@/enums/images.enum';

export const StyledSignin = styled('div')`
  align-items: center;
  background-image: url(${ImagesEnum.BACKGROUND});
  background-position: center;
  background-size: cover;
  color: white;
  display: flex;
  flex-direction: column;
  font-size: 24px;
  height: 100vh;
  justify-content: center;
  width: 100%;
  position: relative;

  .image-signin {
    border-radius: 50%;
    border: 3px solid rgba(245, 246, 250, 0.7);
    background-image: url(${ImagesEnum.AVATAR});
    background-position: center;
    background-size: cover;
    height: 150px;
    width: 150px;
    position: absolute;
    z-index: 2;
    top: 10%;
  }

  .container-signin {
    align-items: center;
    justify-content: center;
    background-color: rgba(245, 246, 250, 0.7);
    border-radius: 15px;
    border: 3px solid rgba(245, 246, 250, 0.9);
    display: flex;
    flex-direction: column;
    padding: 16px 40px;
    width: 35%;
    height: 60%;
    box-shadow: 0px 0px 5px 4px rgba(0,0,0,0.2);

    .actions {
      display: flex;
      width: 100%;
      justify-content: space-around;
      align-items: center;
      margin-top: 30px;

      @media (max-width: 768px) {
        flex-direction: column;
      }
    }

    @media (max-width: 768px) {
      .forgot {
        margin-top: 20px;
      }
    }

    .checkbox-label {
      display: flex;
      align-items: center;
      cursor: pointer;
      font-size: 14px;
      color: #333;
    }

    .checkbox-input {
      appearance: none;
      -webkit-appearance: none;
      width: 16px;
      height: 16px;
      border: 2px solid rgba(127, 143, 166, 1);
      border-radius: 3px;
      margin-right: 8px;
      position: relative;
      transition: border-color 0.3s ease-in-out;
    }

    .checkbox-input:checked {
      border-color: #007bff;
      background-color: #007bff;
    }

    .actions > div {
      display: flex;
      align-items: center;
    }

    .actions a {
      text-decoration: none;
      margin-right: 8px;
      font-size: 16px;
      color: rgba(0, 123, 255, 0.9);
      font-weight: bold;
    }

    .actions a:hover {
      text-decoration: underline;
    }

    .actions span {
      font-size: 16px;
      color: rgba(0, 123, 255, 0.9);
      font-weight: bold;
    }

    button {
      background-color: #007bff;
      border: 2px solid #007bff;
      border-radius: 5px;
      color: white;
      cursor: pointer;
      font-size: 16px;
      font-weight: bold;
      height: 55px;
      margin-top: 20px;
      transition: background-color 0.3s ease-in-out;
      width: 100%;

      &:hover {
        background-color: #0069d9;
      }
    }
  }

  @media (max-width: 768px) {
    .image-signin {
      height: 140px;
      width: 140px;
      top: 13%;
    }

    .container-signin {
      position: absolute;
      z-index: 1;
      width: 90%;
      padding: 16px 15px;
    }
  }
`;
