import React from 'react'
import { Select } from 'antd';

const DashboardHome = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  }
  return (
    <div>
      <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        {
          value: 'jack',
          label: 'Jack',
        },
        {
          value: 'lucy',
          label: 'Lucy',
        },
        {
          value: 'disabled',
          disabled: true,
          label: 'Disabled',
        },
        {
          value: 'Yiminghe',
          label: 'yiminghe',
        },
      ]}
    />
    </div>
  )
}

export default DashboardHome