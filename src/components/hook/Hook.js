import React from 'react';
import Context from '../../Context';

const Hook = () => {
  const [count, setCount] = React.useState(0);
  const [color, setColor] = React.useState('#61dafb');
  const d = React.useContext(Context);
  const onClick = () => {
    if (count % 2) {
      setColor('#61dafb');
    } else {
      setColor('white');
    }
    setCount(count + 1);
  };

  return (
    <div className="flex-c">

      <div className="text-white" style={{ color: color }}>Hook -> Count: {count} {d}</div>
      <div className="btn"
           onClick={onClick}>Increment
      </div>
    </div>
  );
};

export default Hook;
