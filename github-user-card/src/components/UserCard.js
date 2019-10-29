import React from 'react';

export default class UserCard extends React.Component{
    render(){
        if(this.props.userInfo){
            return(
                <>
                <h1>{this.props.userInfo.login}</h1>
                </>
            )
        }else{
            return (null);
        }
    }
}