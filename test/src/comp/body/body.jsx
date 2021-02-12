import Jason from '../../assets/jason.png';
import classes from './body.module.css';


const Body = () =>
{
return(
    <div><div className={classes.BottomNav}><center><h2>HOME   ABOUT ME   PORTFOLIO    CONTACT</h2></center></div>
    <div className={classes.Body}>
<div><img src={Jason}></img></div>
<div className={classes.Text}>
<div className={classes.About}><h1>ABOUT ME</h1></div>
<br></br>
<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
<br></br>

<div>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
<br></br>

<div className={classes.About}>Jason Wood</div>

</div>



    </div>
    </div>
)
}

export default Body ;