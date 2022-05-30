import React from 'react';
import { Button, Typography, Avatar } from '@material-ui/core';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import './About.css';

const About = () => {
  const visitInstagram = () => {
    window.location = 'https://www.instagram.com/dinianjelina_/';
  };

  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar style={{ width: '10vmax', height: '10vmax', margin: '2vmax 0' }} src="https://res.cloudinary.com/knot12/image/upload/v1653895105/diniprofile_cacib9.jpg" alt="Founder" />
            <Typography>Dini Anjelina</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>This is a sample wesbite made by @dinianjelina to learn MERN Stack. This website was created based on a reference on the YouTube channel 6 Pack Programmer with the owner @meabhisingh.</span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a href="https://www.youtube.com/channel/UCZnuHikTNljcY9ZxRyf8PRw/featured" target="blank">
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://www.instagram.com/dinianjelina_/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
