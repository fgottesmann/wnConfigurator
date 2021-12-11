import React from 'react';
import PLZSuche from './PLZSuche';

export default {
  title: 'Pages/PLZSuche',
  component: PLZSuche,
  parameter: {
    layout: 'fullscreen',
  },
};

export const Landing = (): JSX.Element => <PLZSuche />;
