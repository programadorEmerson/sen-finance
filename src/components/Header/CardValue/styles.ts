import { styled } from 'styled-components';

export const StyledCardValue = styled('div')<{ title: string }>`
  display: flex;
  flex-direction: column;
  background-color: ${({ title }) =>
    title === 'Total' ? '#015F43' : '#323238'};
  height: 137px;
  width: 352px;
  padding: 10px 20px 10px 20px;
  border-radius: 5px;

  .filter-values {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
    background-color: transparent;

    span {
      color: #c4c4cc;
      font-size: 15px;
      margin-right: 10px;
    }
  }

  .header-card {
    display: flex;
    width: 100%;
    height: 40px;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;

    span {
      color: #c4c4cc;
      font-size: 15px;
    }
  }

  .value-card {
    display: flex;
    width: 100%;
    flex: 1;
    align-items: center;
    background-color: transparent;

    span {
      color: #e1e1e6;
      font-size: 25px;
    }
  }
`;
