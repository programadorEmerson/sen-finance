import { StyledFilters } from './styles';

import { CategoryWalletEnum } from '@/enums/wallet.enum';
import useWalletContext from '@/hooks/useWalletContext';

const FilterByCategory = () => {
  const { handleSelectFilter, selectedFilter } = useWalletContext();
  return (
    <StyledFilters>
      {[...Object.values(CategoryWalletEnum), 'Todos'].map((category) => {
        return (
          <div className='category' key={category}>
            <input 
              onChange={ () => 
                handleSelectFilter(category)
              } 
              checked={!selectedFilter 
                && category === 'Todos' 
                ? true 
                : selectedFilter === category
              }
              type="radio" 
              name="category" 
              id={category} 
              value={category} 
            />
            <label htmlFor={category}>{category}</label>
          </div>
        );
      })}
    </StyledFilters>
  );
};

export default FilterByCategory;
