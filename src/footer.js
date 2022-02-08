import React from "react";
import './footer.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Cards.css";
// import ContactCard from "./ccard";
// import AboutCard from "./acard";
// import BranchCard from "./bcard";
import {
  BrowserRouter,
  Route,
  Link,
  Routes,
} from 'react-router-dom';

function Footer(props){
    return(
        <div>
            <BrowserRouter>
                <div className="footer-style">
                <Link style={{ textDecoration: 'none' }} to="/contactus"><span className="div-style">CONTACT US</span></Link>
                <Link style={{ textDecoration: 'none' }} to="/aboutus"><span className="div-style">ABOUT US</span></Link>
                <Link style={{ textDecoration: 'none' }} to="/branches"><span className="div-style">BRANCHES</span></Link>
                </div>
                <Routes>
                    <Route path="/" element={<></>}></Route>
                    <Route path="/contactus" element={<ContactCard></ContactCard>}></Route>
                    <Route path="/aboutus" element={<AboutCard></AboutCard>}></Route>
                    <Route path="/branches" element={<BranchCard></BranchCard>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Footer;



function ContactCard() {
    return (
      <Card className="card-style"  sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div">
            
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  }

  function AboutCard() {
    return (
      <Card className="card-style" sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div">
            
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  }

  function BranchCard() {
    return (
      <Card className="card-style" sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div">
            
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  }