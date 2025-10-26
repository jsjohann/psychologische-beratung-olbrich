import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link rel="preload" href={"/fonts/Cabin-VariableFont_wdth,wght.ttf"} as="font" type="font/ttf" crossOrigin="anonymous" key="cabin" />
  ]);
};