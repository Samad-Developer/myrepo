import React, { useState, useEffect } from 'react';
import { Form, Input, Select, Checkbox, Button } from 'antd';

const SearchForm = ({ searchData, handleSearch }) => {

  const [formData, setFormData] = useState({
    country: '', province: '', city: '', areaName: '', areaEnable: '',
  });
  // Set initial filtered options with all available options
  const [filteredCountries, setFilteredCountries] = useState(
    [...new Set(searchData.map((item) => item.country))]
  );
  const [filteredProvinces, setFilteredProvinces] = useState(
    [...new Set(searchData.map((item) => item.province))]
  );
  const [filteredCities, setFilteredCities] = useState(
    [...new Set(searchData.map((item) => item.city))]
  );

  useEffect(() => {
    // Update filtered options based on new searchData (optional)
  }, [searchData]);

  const handleChangeCountry = (value) => {
    setFormData({ ...formData, country: value });
    // const filteredProvinces = searchData.filter((item) => item.country === value);
    // setFilteredProvinces([...new Set(filteredProvinces.map((item) => item.province))]);
    // setFilteredCities([]);
  };

  const handleChangeProvince = (value) => {
    setFormData({ ...formData, province: value });
    // const filteredCities = searchData.filter((item) => item.province === value);
    // setFilteredCities([...new Set(filteredCities.map((item) => item.city))]);
  };

  const handleChangeCity = (value) => {
    setFormData({ ...formData, city: value });
  };

  const handleChangeArea = (event) => {
    setFormData({ ...formData, areaName: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(formData);
  };

  const handleCheckboxChange = (event) => {
    console.log('handcheckbox is calling',)
    setFormData({ ...formData, areaEnable: event.target.checked });
  };

  return (
    <div className="pb-7">
      <Form layout="inline" onSubmit={handleSubmit}>
        <Form.Item label="Country:" name="country">
          <Select style={{ width: 150 }} defaultValue={'Select Country'} value={formData.country} onChange={handleChangeCountry}>
            {filteredCountries.map((country) => (
              <Select.Option key={country} value={country}>
                {country}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="Province:" name="province">
          <Select style={{ width: 100 }} defaultValue={'Select Province'} value={formData.province} onChange={handleChangeProvince} >
            {filteredProvinces.map((province) => (
              <Select.Option key={province} value={province}>
                {province}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="City:" name="city">
          <Select style={{ width: 120 }} defaultValue={'Select City'} value={formData.city} onChange={handleChangeCity}>
            {filteredCities.map((city) => (
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
