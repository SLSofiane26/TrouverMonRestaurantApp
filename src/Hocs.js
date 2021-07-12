import React from 'react';

let Hocs = (classname, Components) => {
  return (props) => (
    <div className={classname}>
      <Components {...props} />
    </div>
  );
};

export default Hocs;
