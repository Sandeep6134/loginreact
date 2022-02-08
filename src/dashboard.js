import React from "react";
import ButtonAppBar from "./navbar";
import BasicButtonGroup from "./login-button";
import SimpleAccordion from "./dropdown";
import Footer from "./footer";
import BasicCard from "./Card";
import "./Cards.css"


class Dashboard extends React.Component{
    constructor(props){
        super();
        this.state={}
    }


    render(){
        return(
            <div>
            <ButtonAppBar></ButtonAppBar><br/><br/>
            <BasicCard className="card-style"></BasicCard>
            <BasicButtonGroup></BasicButtonGroup><br/><br/>
            <SimpleAccordion></SimpleAccordion>
            <Footer></Footer>
            </div>
        )
    }
}

export default Dashboard;