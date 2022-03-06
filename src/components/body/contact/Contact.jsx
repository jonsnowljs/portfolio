import React, {useState} from 'react';
import './Contact.css';
import SocialContacts from '../../common/contacts/SocialContents';
import Button from '@mui/material/Button';
import UseAnimations from 'react-useanimations';
import download from 'react-useanimations/lib/download';


// Contact section
function Contact() {
  const [isPlay, setIsPlay] = useState(true);

  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-left">
          <div className="download">
            {/* TODO update resume pdf*/}

            <a download href="../../../assets/resume.pdf">
              <Button variant="contained" color="info" startIcon={<UseAnimations animation={download} size={"large"} autoPlay={true} loop={"true"} />} onClick={() => {setIsPlay(!isPlay)}}>                
                <span className='button-name'>My Resume</span>
              </Button>
            </a>
          </div>
          <SocialContacts />
        </div>
      </div>
    </div>
  );
}

export default Contact;
