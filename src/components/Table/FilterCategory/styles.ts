import { styled } from 'styled-components';

export const StyledFilters = styled('div')`
  display: flex;
  width: 100%;
  height: 40px;
  max-width: 1100px;
  background-color: #29292e;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid #323238;
  border-radius: 5px;
  padding: 0 20px 0 20px;
  margin-bottom: 5px;

  .category {
    label {
      color: #c4c4cc;
      font-size: 15px;
      margin-left: 10px;
    }
  }
`;
