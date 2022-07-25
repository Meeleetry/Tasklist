import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = ({selected, setSelected}) => {
    const [isActive, setIsActive] = useState(false);
    // const options = ['Baba-Ahmed','David Armstrong', 'Yomi Michae', 'Peter Obi' ]

  return (
    <div className='dropdown'>
        <div className='dropdown-btn' onClick={(e) => setIsActive(!isActive)}>
            Assign User
            <span className='fa fa-caret-down'></span>
        </div>
        {isActive && (
            <div onClick={e => setSelected
            (e.target.textContent)}
            className='dropdown-item'>David Armstrong
            
            </div>
            
        )}
       
    </div>
  );
}

export default Dropdown;