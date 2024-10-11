import React, { Component } from 'react';

class UserGreeting extends Component {
    constructor(){
        super();
        this.state={
           isLoggedIn: false
        }
    }

    render() {

        //method3
        return(
            this.state.isLoggedIn?
            <div>Welcome to React</div>:
            <div>Welcome Guest</div>
        )

        //method2
        // let message
        // if(this.state.isLoggedIn){
        //     message=<div>Welcome to React</div>
        // }else{
        //     message=<div>Welcome Guest</div>
        // }
        // return <div>{message}</div>


        //method1
        // if(this.state.isLoggedIn){
        //     return <div>Welcome to React</div>
        // }else{
        //     return <div>Welcome Guest</div>
        // }

    }
}
export default UserGreeting;