import React from 'react';

export default (props) => {
    return(
        <div className="user-card">
            <h1 className="name">{/*props.userInfo.login*/ 'Insurikai'}</h1>
            <div className="follower-container">
                {
                    props.followers.map( (follower)=>{
                        return(<p className="follower">{follower}</p>)
                    })
                }
            </div>
        </div>
    )
}