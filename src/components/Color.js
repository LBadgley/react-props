import React from 'react';
import PropTypes from 'prop-types';

function Color({ name, rgb: { red, green, blue } }) {
  const colorStyle = {
    display: 'inline-block',
    backgroundColor: '#A83D58',
    width: '2em',
    height: '2em'
  };

  return (
    <dl>
      <dt>Name</dt>
      <dd>{name}<div style={colorStyle}></div></dd>

      <dt>Hex</dt>
      <dd>#A83D58</dd>

      <dt>RGB</dt>
      <dd>r: {red}</dd>
      <dd>g: {green}</dd>
      <dd>b: {blue}</dd>
    </dl>
  );
}

Color.propTypes = {
  name: PropTypes.string,
  rgb: PropTypes.shape({
    red: PropTypes.number.isRequired,
    green: PropTypes.number.isRequired,
    blue: PropTypes.number.isRequired
  })
};

export default Color;


// import React from 'react';
// import PropTypes from 'prop-types';

// function Dog({ name, age, weight }) {
//   return (
//     <dl>
//       <dt>Name</dt>
//       <dd>{name}</dd>

//       <dt>Age</dt>
//       <dd>{age}</dd>

//       <dt>Weight</dt>
//       <dd>{weight}</dd>
//     </dl>
//   );
// }

// Dog.propTypes = {
//   name: PropTypes.string.isRequired,
//   age: PropTypes.string.isRequired,
//   weight: PropTypes.string.isRequired
// };

// export default Dog;
