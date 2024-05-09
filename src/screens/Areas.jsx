import React, { useState, useEffect } from 'react';
import { Table, Space, Button, Checkbox, Popconfirm } from 'antd';
import { EditTwoTone, DeleteTwoTone } from '@ant-design/icons';
import SearchForm from '../components/searchform/SearchForm'
const Areas = () => {
  // Sample data for the table
  const dataSource = [
    {
      key: '1',
      areaName: 'Central Business District',
      country: 'United States',
      province: 'California',
      city: 'Los Angeles',
      areaEnable: true,
    },
    {
      key: '2',
      areaName: 'Financial District',
      country: 'Japan',
      province: 'Tokyo',
      city: 'Tokyo',
      areaEnable: false,
    },
    {
      key: '3',
      areaName: 'Tech Hub',
      country: 'India',
      province: 'Karnataka',
      city: 'Bangalore',
      areaEnable: true,
    },
    {
      key: '4',
      areaName: 'University District',
      country: 'United Kingdom',
      province: 'England',
      city: 'Cambridge',
      areaEnable: false,
    },
    {
      key: '5',
      areaName: 'Historical Center',
      country: 'Italy',
      province: 'Lazio',
      city: 'Rome',
      areaEnable: true,
    },
    {
      key: '6',
      areaName: 'Shopping District',
      country: 'France',
      province: 'Île-de-France',
      city: 'Paris',
      areaEnable: false,
    },
    {
      key: '7',
      areaName: 'Entertainment District',
      country: 'South Korea',
      province: 'Seoul Capital Area',
      city: 'Seoul',
      areaEnable: true,
    },
    {
      key: '8',
      areaName: 'Arts District',
      country: 'Germany',
      province: 'Berlin',
      city: 'Berlin',
      areaEnable: true,
    },
    {
      key: '9',
      areaName: 'Industrial Zone',
      country: 'China',
      province: 'Guangdong',
      city: 'Shenzhen',
      areaEnable: false,
    },
    {
      key: '10',
      areaName: 'Residential Area',
      country: 'Canada',
      province: 'Ontario',
      city: 'Toronto',
      areaEnable: true,
    },
  ];

  const [data, setData] = useState(dataSource)
  const [sortedInfo, setSortedInfo] = useState({});

  const handleChange = (pagination, filters, sorter) => {
    setSortedInfo(sorter);
  };

  const editArea = (record) => {
    console.log()
    window.confirm(`Are you sure you want to edit area "${record.areaName}"?`)
  };

  const deleteArea = (record) => {
    // Implement delete functionality (be cautious about data modification)
    if (window.confirm(`Are you sure you want to delete area "${record.areaName}"?`)) {
      // Assuming data source is mutable (replace with actual deletion logic)
      const newData = data.filter((item) => item.key !== record.key);
      setData(newData);
    }
  };

  const handleAreaEnableChange = (key, checked) => {
    // Update the data source based on key and checked value
    const newData = data.map((item) => {
      if (item.key === key) {
        return { ...item, areaEnable: checked }; // Update areaEnable property
      }
      return item;
    });
    setData(newData);
  };

  const handleSearch = async (formData) => {
    console.log('welcome to Areas.jsx', formData);
  
    // Implement search logic to find item based on country
    const { country } = formData;
  
    if (country) {
      const foundItem = data.find((item) => item.country == country);
      const check = []
      check.push(foundItem)
      setData(check)
  };
  
  }
  const columns = [
    {
      title: 'Area Name',
      dataIndex: 'areaName',
      key: 'areaName',
      sorter: (a, b) => a.areaName.localeCompare(b.areaName),
      sortOrder: sortedInfo.columnKey === 'areaName' && sortedInfo.order,
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
      sorter: (a, b) => a.country.localeCompare(b.country),
      sortOrder: sortedInfo.columnKey === 'country' && sortedInfo.order,
    },
    {
      title: 'Province',
      dataIndex: 'province',
      key: 'province',
      sorter: (a, b) => a.province.localeCompare(b.province),
      sortOrder: sortedInfo.columnKey === 'province' && sortedInfo.order,
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
      sorter: (a, b) => a.city.localeCompare(b.city),
      sortOrder: sortedInfo.columnKey === 'city' && sortedInfo.order,
    },
    {
      title: 'Area Enable',
      dataIndex: 'areaEnable',
      key: 'areaEnable',
      render: (text, record) => (
        <Checkbox checked={record.areaEnable} onChange={(e) => handleAreaEnableChange(record.key, e.target.checked)} />
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (record) => (
        <Space size="small">
          <Button type="text" onClick={() => editArea(record)}>
            <EditTwoTone />
          </Button>
          <Button type="danger" onClick={() => deleteArea(record)}>
            <DeleteTwoTone />
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <SearchForm
        data={data}
        handleSearch={handleSearch}
      />
      <Table
        columns={columns}
        dataSource={data}
        onChange={handleChange}
        pagination={{ pageSize: 5 }} />
    </>
  );
};

export default Areas;
