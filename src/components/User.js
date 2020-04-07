import React from 'react'
import '../styles/user.css'

const User=(props)=>{
    console.log(props)
    return(
            <center>
            <div className="card" style={{borderLeft:`${props.che}`}}>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12 col-lg-6">
                            <div className="row">
                                <div className="col-md-12 col-lg-6">
                                <img src={props.src} alt={props.alt} className="img-fluid mt- mb-3"/>
                                </div>
                                <div className="col">
                                 <p>{props.companyname}
                                 <span className="badge badge-secondary ml-2 p-2" id="new">{props.new}</span>
                                 <span className="badge badge-secondary ml-2 p-2">{props.feature}</span>
                                 </p>
                            <h6>
                                {props.title}
                            </h6>
                            <span className="text-muted">
                                <span className="mr-2">
                                   {props.hour}
                                    </span>
                                    <span>
                                    {props.location}
                                    </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <hr className="line"/>
                        <div className="col-md-12 col-lg-6 mt-4">
                         {props.language} <span className="badge ml-2 mt-2 p-2" id="level">{props.level}</span>{props.tool}
                        </div>
                    </div>
                </div>
                </div>
            </center>
    )
}
export default User