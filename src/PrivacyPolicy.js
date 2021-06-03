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
        <div>
            <FrontHeading/>
            {/* <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation> */}

                <b.Container fluid='xl' className={sty.controlpanelfont}>
                    <b.Container fluid='xl' className={containerStyle.containerfront}>
                      <hr/>
                        <div style={{padding:20}}>
                        <div style={{textAlign:'center',justifyContent:'space-between',display:'flex'}}><p></p>
                        <div style={{display:'flex'}}><PolicyIcon fontSize="large"/><h3>Privacy Policy</h3></div><p></p>
                        </div>
                            <p style={{textAlign:'justify'}}>
                    <b.Alert variant='success'>
<p>1. <b>The data in this website is used in due permission from their respective owners.</b> In case of any error crept in the data, viewer is requested to enquire it through our feedback form for any type of change (subjected to improvement, deletion or modification).</p>


<p>2. <b>The information contained in this website are not verified</b> as it is collected voluntarily from their respective owners. We strongly recommend to self verify it before any future use.</p>


<p>3. <b>Information in this website is meant only for knowledge and study purpose.</b> Our intention is not to hurt any personal sentiment and we feel sorry if it happens with someone. You can take action by informing the administrator(s) for any kind of data and information related issues.</p>


<p>4. <b>The present administrator(s) is fully responsible</b> for availability of data and information in this website. Because the administrator(s) has full power of changing or modifying sections like "Students", "Teachers", "Gallery", "Slideshows", "Recruiters", "Videos", "Notice", "Magazine", "Reviews" etc through Admin Panel.

Every year a new administrator(s) is appointed.</p>
</b.Alert>
                            </p>

                        </div>
                        <hr/>
                    </b.Container>
                </b.Container>
            <Footer/>
        </div>
    )
}

export default PrivacyPolicy
