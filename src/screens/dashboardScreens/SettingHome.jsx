import { Tabs } from 'antd';
import React from 'react';
import Areas from './Areas';
import Cities from './Cities'
import Country from './Country'
import Province from './Province'

const onChange = (event) => {
  console.log("tabs are checkng now", event);
};
const DashboardHome = () => (
  <Tabs
    defaultActiveKey="1"
    onChange={(event) => onChange(event)}
    items={[
      {
        label: `Areas`,
        key: '1',
        children: <Areas />,
      },
      {
        label: `Country`,
        key: '2',
        children: <Country />,
      },
      {
        label: `Province`,
        key: '3',
        children: <Province />,
      },
      {
        label: `City`,
        key: '4',
        children: <Cities />,
      },
    ]}
  />
);
export default DashboardHome;