import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";
class About extends Component{
    constructor(props){
        super(props);
       console.log("Parent constructor");
    }
    componentDidMount(){
        console.log("Parent DidMount")
    }
    componentDidUpdate(){
        console.log("Parent DidUpdate");
    }
    componentWillUnmount(){
        console.log("Parent Comp will Unmount");
    }
    render(){
        console.log("Parent render");
        return (<div>
            <h1>About US</h1>
            <h2>We are here for you to deliver food for you on time!</h2>
            {/* <User name={"Kiruthiga Natrajan"} loc={"Dgl"} add={"kiruthiganatrajan@gmail.com"} /> */}
            <UserClass name={"First"} loc={"Chennai"} add={"MadrasCoffeeHouse@gmail.com"}/>
            {/* 
             */}
        </div>);
    }
}

export default About;