import { Icon } from './Icon';
import { useState } from 'react';

export function Header(props) {


    return (
      <>    
       
  
        <div className="header">
            <Icon iconName={props.isDashVisible ? 'arrow-left' : 'list-solid'} className='dash-btn' onClick={props.toggleDashboard} style={{opacity:props.isDashVisible ? 0.4 : 1}} />            
            <div className="mid-text"> <span>-</span>-List </div>
            <div className="filler"></div>
        </div>
  
  
  
  
      </>
      )
  }

