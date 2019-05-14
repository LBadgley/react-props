import React from 'react';
import PropTypes from 'prop-types';

function Color({ name, rgb }) {
  const colorStyle = {
    display: 'inline-block',
    backgroundColor: '#403D58',
    width: '1em',
    height: '1em'
  };

  return (
    <dl>
      <dt>Name</dt>
      <dd>{name || 'Arsenic'} <div style={colorStyle}></div></dd>

      <dt>Hex</dt>
      <dd>#403D58</dd>

      <dt>RGB</dt>
      <dd>
        <p>{red}: 64</p>,
        <p>{green}: 61</p>
        <p>{blue}: 88</p>
      </dd>
    </dl>
  );
}

Color.propTypes = {
  name: PropTypes.string,
  rgb: PropTypes.shape({
    RED: PropTypes.number.isRequired(),
    GREEN: PropTypes.number.isRequired(),
    BLUE: PropTypes.number.isRequired()
  })
};

export default Color;
