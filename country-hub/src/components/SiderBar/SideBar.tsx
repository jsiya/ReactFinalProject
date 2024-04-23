import { FC, useState } from 'react';
import { Container, Content } from './SideBarSytles';
import { Segmented, Select,  Slider, Space } from 'antd';
import './styles.css';

interface SidebarProps {
  active: any;
}

export const Sidebar: FC<SidebarProps> = ({ active }) => {

const handleChange = (value: string[]) => {
  console.log(`selected ${value}`);
};

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
          <Segmented id='independent' options={['All', 'Yes', 'No']} className='radio' />
          <Space style={{ width: '80%' }} direction="vertical">
            <Select
              id='selection'
              mode="multiple"
              allowClear
              style={{ width: '100%' }}
              placeholder="Please select"
              onChange={handleChange}
              options={[
                { value: 'Europe', label: 'Europe' },
                { value: 'Asia', label: 'Asia' },
                { value: 'Africa', label: 'Africa' },
                { value: 'Americas', label: 'Americas' },
                { value: 'Oceania', label: 'Oceania' },
                { value: 'North America', label: 'North America' },
              ]}/>
          </Space>
          <Slider style={{ width: '80%' }} id='range' range defaultValue={[0, 5000000000000]}/>
        </section>
        </section>
      </Content>
    </Container>
  );
}

export default Sidebar;
