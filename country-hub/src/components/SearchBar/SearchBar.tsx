import React, { useState } from 'react';
import './SearchBarStyles.css';
import { Button, Dropdown, Menu, message, Space } from 'antd';
import { DownOutlined, FlagOutlined, EnvironmentOutlined, WechatFilled } from '@ant-design/icons';

interface MenuItem {
  label: string;
  key: string;
  icon: JSX.Element;
}
interface SearchBarProps {
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  setSearchCategory: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
}

const items: MenuItem[] = [
  {
    label: 'Name',
    key: '1',
    icon: <FlagOutlined />,
  },
  {
    label: 'Capital',
    key: '2',
    icon: <EnvironmentOutlined />,
  },
  {
    label: 'Language',
    key: '3',
    icon: <WechatFilled />,
  },
];

const SearchBar: React.FC<SearchBarProps> = ({ setSearchInput, setSearchCategory, handleSearch }) => {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const handleMenuClick = (e: any) => {
    const selectedItem = items.find(item => item.key === e.key);
    setSelectedItem(selectedItem || null);
    setSearchCategory(e.key);
    message.info(`${selectedItem?.label} selected`);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className='search-bar'>
      <section className="search-bar-sec">
        <input type="text" placeholder="Search" required onChange={handleInputChange} />
        <Dropdown className='dropdown' overlay={
          <Menu onClick={handleMenuClick}>
            {items.map(item => (
              <Menu.Item key={item.key} icon={item.icon}>
                {item.label}
              </Menu.Item>
            ))}
          </Menu>
        }>
          <Button>
            <Space>
              {selectedItem ? selectedItem.label : 'Choose'}
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </section>
      <button className='search-btn' onClick={handleSearch}>Search</button>
    </div>
  )
}

export default SearchBar;
