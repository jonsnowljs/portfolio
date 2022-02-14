import React from 'react';
import { SocialData } from '../../../assets/data/SocialData';
import './SocialContents.css';

function SocialContents() {
  const data = SocialData;
  return (
    <div className="social-contact">
      {data.map((item) => {
        return (
          <a href={item.link}>
            <div className="social-icon-div">
              <img
                src={item.icon}
                className="social-icon"
                alt={`social_icon_${item.platform}`}
              />
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default SocialContents;
