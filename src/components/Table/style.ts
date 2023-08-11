import { styled } from 'styled-components';

export const StyledTableWallet = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 85px;

  .row-table {
    display: flex;
    width: 100%;
    height: 40px;
    gap: 30px;
    max-width: 1100px;
    background-color: #29292e;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1px solid #323238;
    border-radius: 5px;
    padding: 0 20px 0 20px;

    .row-table__title,
    .row-table__date,
    .row-table__type,
    .row-table__value,
    .row-table__actions,
    .row-table__category {
      display: flex;
      align-items: center;

      span {
        color: #c4c4cc;
      }
    }

    .row-table__title {
      width: 45%;
      padding-left: 20px;
    }

    .row-table__date {
      width: 10%;
    }

    .row-table__category {
      width: 15%;
    }

    .row-table__type {
      width: 15%;
      padding-left: 15px;
    }
    .row-table__value {
      width: 15%;
    }
    .row-table__actions {
      justify-content: center;
      gap: 15px;
      width: 10%;
    }

    .edit-button, .delete-button {
      background-color: transparent;
      height: 22px;
      width: 22px;
      border: none;
      cursor: pointer;

      img {
        height: 22px;
        width: 22px;
      }
    }
  }
`;
