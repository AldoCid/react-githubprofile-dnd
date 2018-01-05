import React from 'react'


const UserItem = ({data}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="img-container col" >
                    <img  src={data.avatar_url} width="170px" height="170px" />
                </div>
                <div className="user-description-container col-8" >
                    <div className="container">
                        <div className="row">
                            <label>Name: {data.name}</label>
                        </div>
                        <div className="row">
                            <label className="">Location: </label>
                            <label>{data.location}</label>
                        </div>
                        <div className="row">
                            <label>Company: {data.company}</label>
                        </div>
                        <div className="row">
                            <label>Repos: {data.public_repos}</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserItem


