import React from 'react';

import './row.css';

const Row = ({ left, right }) => {
  return (
    <div className="row mb2">
      <div className="col-md-4">
        {left}
      </div>
      <div className="col-md-8">
        {right}
      </div>
    </div>
  );
};


export default Row;
