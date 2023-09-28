import React from 'react';
import { Link } from 'react-router-dom';

const NotImpressed = () => {
  return (
    <div className='card'>
      <p>Not impressed, play again.</p>
      <Link to="/">Go Back to Quiz</Link>
    </div>
  );
};

export default NotImpressed;
