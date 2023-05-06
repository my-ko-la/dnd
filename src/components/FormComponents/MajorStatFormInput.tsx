import React from 'react';
import CircleInput from './circleInput';

interface MajorStatFormInputProps {
  statName: string;
  statValue: number;
}

const MajorStatFormInput: React.FC<MajorStatFormInputProps> = ({ statName, statValue }) => {
  return (
    <div className="w-28 h-28 border-4 inline-flex items-center justify-center rounded-md border-black shadow-md">
      <div className="w-24 h-24 p-2 flex flex-col justify-between items-center rounded-md border-black border-2 outline-black border-solid">
        <div className="text-md font-bold">{statName}</div>
        <div className="text-2xl">{statValue}</div>
      </div>
      <CircleInput isEllipse={true} someVal={statValue} />
    </div>
  );
};

export default MajorStatFormInput;
