import React, { useState, useEffect } from 'react';
import { Form, Input, Select, Checkbox, Button } from 'antd';

const SearchForm = ({ data, handleSearch }) => {
  // State variables for form data and dropdown options
  const [formData, setFormData] = useState({
    country: '',
    province: '',
    city: '',
    areaName: '',
    areaEnable: '',
  });

  const [countries, setCountries] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);

  // Extract unique countries, provinces, and cities on data update
  useEffect(() => {
    const uniqueCountries = [...new Set(data.map((item) => item.country))];
    const uniqueProvinces = [...new Set(data.map((item) => item.province))];
    const uniqueCities = [...new Set(data.map((item) => item.city))];

    setCountries(uniqueCountries);
    setProvinces(uniqueProvinces);
    setCities(uniqueCities);
  }, [data]);

  // Separate handleChange functions for each dropdown
  const handleChangeCountry = (value) => {
    setFormData({ ...formData, country: value });
    const filteredProvinces = data.filter((item) => item.country === value);
    setProvinces(filteredProvinces.map((item) => item.province));
    setCities([]); // Reset cities when country changes
  };

  const handleChangeProvince = (value) => {
    setFormData({ ...formData, province: value });
    const filteredCities = data.filter((item) => item.province === value);
    setCities(filteredCities.map((item) => item.city));
  };

  const handleChangeCity = (value) => {
    setFormData({ ...formData, city: value });
  };

  const handleChangeArea = (event) => {
    setFormData({ ...formData, areaName: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(formData); // Pass search criteria to parent component
  };

  const handleCheckboxChange = (event) => {
    setFormData({ ...formData, areaEnable: event.target.checked });
  }
  // ... other functions (handleAreaName, handleCheckboxChange, handleSubmit) remain the same

  return (
    <div className="pb-7">
      <Form layout="inline" onSubmit={handleSubmit}>
        <Form.Item label="Country:" name="country">
          <Select value={formData.country} onChange={handleChangeCountry}>
            <option value="">Please Select</option>
            {countries.map((country) => (
              <Select.Option key={country} value={country}>
                {country}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="Province:" name="province">
          <Select value={formData.province} onChange={handleChangeProvince} disabled={!formData.country}>
            <option value="">Please Select</option>
            {provinces.map((province) => (
              <Select.Option key={province} value={province}>
                {province}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="City:" name="city">
          <Select value={formData.city} onChange={handleChangeCity} disabled={!formData.country}>
            <option value="">Please Select</option>
            {cities.map((city) => (
              <Select.Option key={city} value={city}>
                {city}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="Area Name:" name="areaName">
          <Input value={formData.areaName} onChange={handleChangeArea} placeholder="Search by area name" />
        </Form.Item>
        <Form.Item label="Enable:" name="areaEnable">
          <Checkbox checked={formData.areaEnable} onChange={handleCheckboxChange} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" onClick={handleSubmit}>
            Search
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SearchForm;
