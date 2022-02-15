import React from 'react';
import './Contact.css';
import Separator from '../../common/separator/Separator';
import SocialContacts from '../../common/contacts/SocialContents';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';

// Contact section
function Contact() {
  return (
    <div className="contact">
      <Separator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Contact me </p>
          <SocialContacts />
        </div>
        <div className="download">
          {/* TODO update resume pdf*/}

          <a download href="../../../assets/resume.pdf">
            <i class="fi fi-rr-cloud-download download-icon"></i>
            <Button variant="contained" color="primary">
              Download Resume
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
