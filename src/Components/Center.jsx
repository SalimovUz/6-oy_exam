import React from 'react'
import Header from './Header'
import Foods from './Foods'
import Payment from './Payment';

const Center = () => {
  return (
    <div className="mx-4 w-3/5">
      {/* <Header /> */}
      <Foods />
    </div>
  );
}

export default Center