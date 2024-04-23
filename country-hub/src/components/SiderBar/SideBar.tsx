import { FC, useEffect, useState } from 'react';
import { Container, Content } from './SideBarSytles';
import { Segmented, Select,  Slider, Space } from 'antd';
import './styles.css';
import { useCountryContext } from '../../contexts/FilterContext';
import { countriesAPI } from '../../services/CountryService';
import { Country } from '../../models/Country';

interface SidebarProps {
  active: any;
}

export const Sidebar: FC<SidebarProps> = ({ active }) => {

  const { data: countries } = countriesAPI.useFetchAllCountriesQuery();
  const { filterData, setFilterData } = useCountryContext();

  const [independentFilter, setIndependentFilter] = useState('All');
  const [regionFilter, setRegionFilter] = useState<string[]>([]);
  const [populationFilter, setPopulationFilter] = useState<number[]>([0, 5000000000000]);

  const handleIndependentChange = (value: string) => {
    setIndependentFilter(value);
  };

  const handleRegionChange = (value: string[]) => {
    setRegionFilter(value);
  };

  const handlePopulationChange = (value: number[]) => {
    setPopulationFilter(value);
  };

  const handleChange = () => {
    if (countries && countries.length > 0) {
      const filteredCountries = countries.filter((country: Country) => {
        const meetsIndependentFilter = independentFilter === 'All' || (independentFilter === 'Yes' && country.independent) || (independentFilter === 'No' && !country.independent);
        const meetsRegionFilter = regionFilter.length === 0 || regionFilter.includes(country.region);
        const meetsPopulationFilter = country.population >= populationFilter[0] && country.population <= populationFilter[1];
  
        return meetsIndependentFilter && meetsRegionFilter && meetsPopulationFilter;
      });
  
      console.log('filtered coun:', filteredCountries);
      setFilterData(filteredCountries);
    } else {
      setFilterData(null);
    }
  };
  


  useEffect(() => {
    handleChange();
  }, [independentFilter, regionFilter, populationFilter]);

  const [disabled, setDisabled] = useState(false);

  const onChange = (checked: boolean) => {
    setDisabled(checked);
  };

  return (
    <Container sidebar={active}>
      <Content>
        <section className='filters-h'>
          <h3>Filters</h3>
        </section>

        <section className='filter-sec'>
          <section className='filter-sec-inner'>
            <label className='filter-label' htmlFor="independent">Independent</label>
            <label className='filter-label' htmlFor="selection">Region</label>
            <label className='filter-label' htmlFor="range">Population</label>
          </section>

          <section className='filter-sec-inner filters'>
            <Segmented id='independent' options={['All', 'Yes', 'No']} className='radio' onChange={handleIndependentChange}
             />
            <Space style={{ width: '80%' }} direction="vertical">
              <Select
                id='selection'
                mode="multiple"
                allowClear
                style={{ width: '100%' }}
                placeholder="Please select"
                onChange={handleRegionChange}
                options={[
                  { value: 'Europe', label: 'Europe' },
                  { value: 'Asia', label: 'Asia' },
                  { value: 'Africa', label: 'Africa' },
                  { value: 'Americas', label: 'Americas' },
                  { value: 'Oceania', label: 'Oceania' },
                  { value: 'North America', label: 'North America' },
                ]}/>
            </Space>
            <Slider style={{ width: '80%' }} id='range' range defaultValue={[0, 1500000000]} max={1500000000} onChange={handlePopulationChange}
            />
          </section>
        </section>
      </Content>
    </Container>
  );
}

export default Sidebar;
