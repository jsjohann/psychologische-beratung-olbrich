import React from 'react';
import { withPrefix } from 'gatsby';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link rel="preload" href={withPrefix("/fonts/Cabin-VariableFont_wdth,wght.ttf")} as="font" type="font/ttf" crossOrigin="anonymous" key="cabin" />,
    <style
      key="font-face"
      dangerouslySetInnerHTML={{
        __html: `
          @font-face {
            font-family: "Cabin";
            src: url("${withPrefix("/fonts/Cabin-VariableFont_wdth,wght.ttf")}") format("truetype");
            font-weight: 300 400 500 600 700;
            font-style: normal;
            font-display: swap;
          }
        `,
      }}
    />
  ]);
};