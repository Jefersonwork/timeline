import React from 'react';

const files = require.context('!svg-sprite-loader!../img/icons', false, /.*\.svg$/);
files.keys().forEach(files);

const Icon = ({ type, className }) => (

<svg className={`dib v-mid ${type}`} width="26" height="26">
  <use xlinkHref={`#${type}`}></use>
</svg>
);

export default Icon;