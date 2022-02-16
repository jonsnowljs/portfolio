import React from 'react';
import './Title.css';
function Title(props) {
  return (
    <div className='section-title-container'>
      <div className="section-title">{props.title}</div>
    </div>
  );
}

export default Title;
