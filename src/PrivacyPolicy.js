import React from 'react'
import Footer from './Footer'
import FrontHeading from './FrontHeading'
import containerStyle from './AdminContainer.module.css'
import sty from './css/adminFormImg.module.css';
import * as b from 'react-bootstrap'
import { Placeholder } from 'rsuite';
import { Button, IconButton, ButtonGroup, ButtonToolbar } from 'rsuite';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PolicyIcon from '@material-ui/icons/Policy';
import Paper from '@material-ui/core/Paper';
function PrivacyPolicy() {
    const { Paragraph } = Placeholder;
    const useStyles = makeStyles({
        root: {
          width: 500,
        },
      });
    const classes = useStyles();
  const [value, setValue] = React.useState(0);
    return (
        <div >
            <FrontHeading/>
            <div style={{padding:20}} className={containerStyle.grad}>
            <Paper elevation={9}  className={containerStyle.grad}>   
            
<div className={sty.controlpanelfont}>
<h1 style={{textAlign:'center',fontSize:45}} className={containerStyle.borderbottomstyle}>&gt;&gt;<span className={containerStyle.ach} ><b className={sty.controlpanelfont}>Privacy Policy</b></span></h1>
                {/* <b.Container fluid='xl' > */}
                    {/* <b.Container fluid='xl' className={containerStyle.containerfront}> */}

                        <div >
                        {/* <div style={{textAlign:'center',justifyContent:'space-between',display:'flex'}}><p></p>
                        <div style={{display:'flex'}}><h2>Privacy Policy</h2></div><p></p>
                        </div> */}
                        
                            <p style={{textAlign:'justify',fontSize:19}}>
                    <b.Alert variant='info'>
<p>&#10148;Last updated: June 14, 2021</p>
<br/><hr/>
<h2>Privacy Notice : About</h2><br/>
<p>1. <b> The data in this website is used in due permission from their respective owners. </b> In case of any error crept in the data, viewer is requested to enquire it through our feedback form for any type of change (subjected to improvement, deletion or modification).</p>


<p>2. <b>The information contained in this website are not verified</b> as it is collected voluntarily from their respective owners. We strongly recommend to self verify it before any future use.</p>


<p>3. <b>Information in this website is meant only for knowledge and study purpose.</b> Our intention is not to hurt any personal sentiment and we feel sorry if it happens with someone. You can take action by informing the administrator(s) for any kind of data and information related issues.</p>


<p>4. <b>The present administrator(s) is fully responsible</b> for availability of data and information in this website. Hence has full power of changing or modifying sections like "Students", "Teachers", "Gallery", "Slideshows", "Recruiters", "Videos", "Notice", "Magazine", "Reviews" etc through Admin Panel.

Every year a new administrator(s) is appointed.</p>
<br/><hr/>
<h2>What About Cookies and Other Identifiers?</h2><br/>
<p>As this is a simple web app for knowledge and study pupose, we don't collect Cookies. There is no user login system in this application. 
    That means you can visit here anonymously.
</p>
<br/><hr/>
<h2>How Secure Is Your Information ?</h2><br/>
<p>1. This is a free hosting served on firebaseapp. another wesite name is <a href='https://apcrp-eie.firebaseapp.com' target='_blank'>apcrp-eie.firebaseapp.com </a>
 which is same as <a href='https://apcrp-eie.web.app' target='_blank'>apcrp-eie.web.app</a> with different name. Free hosting means
one can not get this website by searching on Web. So there is no chance for any unknown people to reach this site. </p>
<p>2. Only who have link of this site, can access their personal information (i.e. Profile Photo, Email Address, Phone Number, Work, College/
    University).</p>
<p>3. Some people didn't give their personal information (Phone Number) for their security issue, so it is written as "ask via mail" in Students
    Section.
</p>
<br/><hr/>
<h2>What Information Can We Collect?</h2><br/>
<p>We can have your information (Name, Email Address) if you wish to give a feedback including page and article.
 Our purpose is to build this website more useful, user-friendly and better. So, your opinion is much more important for us. 

    
</p>
</b.Alert>
                            </p>

                        </div>
                        <hr/>
                    {/* </b.Container> */}
                {/* </b.Container> */}
</div>
</Paper>
</div>
            <Footer/>
        </div>
    )
}

export default PrivacyPolicy
