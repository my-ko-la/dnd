import React from 'react';

type CircleInputType = {
  isEllipse: boolean;
  //TODO: rename prop to proper name
  someVal: number;
};

const CircleInput: React.FC<CircleInputType> = ({ someVal, isEllipse }) => {
  const shape = isEllipse ? "w-12 h-9" : "w-9 h-9";

  return (
    <div className={`clip-ellipse rounded-full absolute border-2`}>
      <div className="border-1">{someVal}</div>
    </div>
  );
};

export default CircleInput;