import React from 'react';
import emailjs from 'emailjs-com';
import Header from './Header';
import { Card, CardContent, Grid, TextField } from '@material-ui/core';
import Button from 'react-bootstrap/Button';

const ContactForm = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, e.target, process.env.REACT_APP_YOUR_USER_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  }


  return (
    <div>
      <Header />
      <Card style={{maxWidth:450, margin:"0 auto", padding:"20px 5px"}}>
        <CardContent>
          <form onSubmit={sendEmail}>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField label="First Name" placeholder="Enter first name" variant="outlined" fullWidth required name="firstName"/>
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField label="Last Name" placeholder="Enter last name" variant="outlined" fullWidth required name="lastName"/>
              </Grid>
              <Grid xs={12} item>
                <TextField type="email" label="Email" placeholder="Enter email" variant="outlined" fullWidth required name="email"/>
              </Grid>
              <Grid xs={12} item>
                <TextField type="tel" label="Phone" placeholder="Enter phone number" variant="outlined" fullWidth name="phone"/>
              </Grid>
              <Grid xs={12} item>
                <TextField multiline rows={4} label="Message" placeholder="Type your message" variant="outlined" fullWidth name="message"/>
              </Grid>
              <Grid xs={12} item>
                <Button type="submit" variant="outline-secondary">Submit</Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default ContactForm;