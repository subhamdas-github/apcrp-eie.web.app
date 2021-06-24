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
<h1 style={{textAlign:'center',fontSize:40,display:'flex',textAlign:'center',justifyContent:'center'}} className={containerStyle.borderbottomstyle}>
<div style={{paddingBottom:12,color:'#D1ECF1'}}><PolicyIcon fontSize="large"/></div>
<span className={containerStyle.ach} style={{paddingTop:10,paddingLeft:2}}><b>Privacy Policy</b></span></h1>

{/* <h1 style={{textAlign:'center',fontSize:45}} className={containerStyle.borderbottomstyle}>&gt;&gt;<span className={containerStyle.ach} ><b className={sty.controlpanelfont}>Privacy Policy</b></span></h1> */}
                {/* <b.Container fluid='xl' > */}
                    {/* <b.Container fluid='xl' className={containerStyle.containerfront}> */}

                        <div >
                        {/* <div style={{textAlign:'center',justifyContent:'space-between',display:'flex'}}><p></p>
                        <div style={{display:'flex'}}><h2>Privacy Policy</h2></div><p></p>
                        </div> */}
                        
                            <p style={{textAlign:'justify',fontSize:19}}>
                    <b.Alert variant='info'>
<p>&#10148;Last updated on: June 19, 2021</p>

<br/><hr/>
<h2>1. Privacy Statement :</h2>
<p>This Website <a href='https://apcrp-eie.web.app' target='_blank'>apcrp-eie.web.app</a> or <a href='https://apcrp-eie.firebaseapp.com' target='_blank'>apcrp-eie.firebaseapp.com </a>
 is operated by present administrator(s), develeped by <a href='#'>Subham Das</a> (A.P.C. Ray 
 Polytechnic,passout 2021).
 Please read the following carefully to understand our terms and conditions regarding your Privacy.
<b> By using this Website, you are consenting to the practices described in this Privacy Notice.</b>
</p>
<p> <b>(i) The data in this website is used in due permission from their respective owners. </b> In case of any error crept in the data, viewer is requested to enquire it through our feedback form for any type of change (subjected to improvement, deletion or modification).</p>


<p> <b>(ii) The information contained in this website are not verified</b> as it is collected voluntarily from their respective owners. We strongly recommend to self verify it before any future use.</p>


<p> <b>(iii) Information in this website is meant only for knowledge and study purpose.</b> Our intention is not to hurt any personal sentiment and we feel sorry if it happens with someone. You can take action by informing the administrator(s) for any kind of data and information related issues.</p>


<p> <b>(iv) The present administrator(s) is fully responsible</b> for availability of data and information in this website. Hence has full power of changing or modifying sections like "Students", "Teachers", "Gallery", "Slideshows", "Recruiters", "Videos", "Notice", "Magazine" etc through Admin Panel.

Every year a new administrator(s) is appointed.</p>
<br/><hr/>
<h2>2. What About Cookies and Other Identifiers?</h2>
<p>As this is a simple web application made for knowledge and study pupose, we don't collect Cookies. 
    There is no user login system in this application. 
    That means we couldn't track your signed in email in browser. You can visit here as a anonymous user.
</p>
<br/><hr/>
<h2>3. How Secure Is Your Information ?</h2>
<p>(i) We have used a free hosting service api on firebaseapp for this website. another wesite name is <a href='https://apcrp-eie.firebaseapp.com' target='_blank'>apcrp-eie.firebaseapp.com </a>
 which is same as <a href='https://apcrp-eie.web.app' target='_blank'>apcrp-eie.web.app</a> with different name. Free hosting means
you can not get any results of this website link by searching on Web. So there is no chance for any unknown people to reach this site. </p>
<p>(ii) Only who have link of this site, can see their personal information in Students Section (i.e. Profile Photo, Email Address, Phone Number, Work, College/
    University).</p>
<p>(iii) Some students (maybe passouts/current) of DEIE didn't give their personal information (Phone Number) to present administrator
    for their security reason. We highly respect their privacy, so it is written as "ask via mail" in there.
</p>
<br/><hr/>
<h2>4. What Information Can We Collect?</h2>
<p>We can have your personal information (Name, Email Address) if you wish to give a feedback including both page and article.
 Our purpose is to build this website more useful, user-friendly and better services. So, your opinion is much more important to us.
 We do not share your personal information with anyone without your consent.<br/>
 <br/><hr/>
<h2>5. Social Network Plugins?</h2>
<p>In this website incorporates plugins or buttons for social networks(Facebook, Instagram, Linkedin, etc) are used in order to access content easily from
    here. In Heading section we have used two "facebook" links of facebook page and facebook group. Also in the footer section social
    links are given so that you can easily contact us anytime for any kind of queries related to this website.
</p>
<br/><hr/>
<h2>6. Changes</h2>
<p>We may update this privacy policy at any time in order to reflect without notice,
To make sure you are aware of any changes, please review this policy periodically.
</p>
<br/><hr/>
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
