import React from "react";
import UserContext from "../utils/UserContext";


class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            ratings : 0,
            name:"MadrasCoffeeHouse",
            img:"Dummy"

        }
        console.log(this.props.name+"child constructor");
    }
   async componentDidMount(){
       console.log(this.props.name+"child DidMount");
       const data = await fetch("https://api.github.com/users/kruthigha");
       const res= await data.json();
       this.setState({
        
        name : "MadrasCoffeeHouse",
        img: "https://tse4.mm.bing.net/th?id=OIP.BC2kHXqaiqzjyYCCHel8BAHaDP&pid=Api&P=0&h=220",
    })
       console.log(res);
    }
    componentDidUpdate(){
        console.log(this.props.name+"child DidUpdate");
    }
    componentWillUnmount(){
        console.log(this.props.name+"child will Unmount");
    }

    render(){
        const {loc,add} = this.props;
        const {ratings} = this.state;
        console.log(this.props.name+"child render");
        return(
            <div id="user-card">
            <img src={this.state.img}/>
               <h2>Rate our app {ratings} out of 5</h2>
               <input type="number" min={0} max={5} onChange={(e)=>{
                this.setState({
                    ratings : e.target.value,
                    
                })
               }}/>
               {/* <button onClick={()=>{
                this.setState ({
                    ratings : this.state.ratings +1
                })
               }
               }>Like</button> */}
               <h2>Name: {this.state.name}</h2>
               <h2>Location: {loc}</h2>
               <h3>contact: {add}</h3>
               <UserContext.Consumer>
                {(data)=><h1>{data.loggedInUser}</h1>}
               </UserContext.Consumer>
             </div>
        )
    }
}
export default UserClass;