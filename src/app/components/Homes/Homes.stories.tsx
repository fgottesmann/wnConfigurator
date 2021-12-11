import React from 'react';
import HomeCards from './Homes';

export default {
  title: 'Pages/Homes',
  component: HomeCards,
  parameter: {
    layout: 'fullscreen',
  },
};

export const Homes = (): JSX.Element => <HomeCards />;
