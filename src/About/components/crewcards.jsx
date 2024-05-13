import React from 'react';
import '../styles/About.css';
import { members } from './crew-member-data';

const Crewcards = () => {

  return (
    <div className='crew-member-cards-grid'>
      {members.map((member) => (
        <div className="crew-member-card" key={member.id}>

          <div className="member-profile-cover">
            <img src={member.src} alt="Member" />
          </div>

          <div className='crew-member-card-details'>
            <div className='member-details'>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
            {/* <a href="/">
              <img src={member.Linkedin} alt="Linkedin" />
            </a> */}
          </div>
          
        </div>
      ))}
    </div>
  );

}

export default Crewcards;
