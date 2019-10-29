import React from 'react';

export default (props) => {
    return(
        <div className="user-card">
            <h1 className="name">{props.userInfo.login}</h1>
            {
                props.followers.map( (follower)=>{
                    return(<p className="follower">{follower}</p>)
                })
            }
        </div>
    )
}