import React from 'react';
import LogedChart from './SingIn/LogedChart';
import RegisterChart from './SingUp/RegisterChart';

const ChartsContainer = ({ januaryLogs }) => {
  return (
    <>
      <LogedChart januaryLogs={januaryLogs} />
      <RegisterChart />
    </>
  );
};

export default ChartsContainer;
