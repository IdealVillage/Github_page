import React from "react";
import { Link } from "react-router-dom";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

const HomePage=({
    userId,
    onSubmitUserId,
    onChangeUserId
})=>(
    <div>
        <TextField 
            hintText='please key in your Github User Id'
            onChange={onChangeUserId}
        />
        <Link to={{
            pathname:'/result',
            state:{userId}
        }}>
            <RaisedButton label='Submit' onClick={()=>onSubmitUserId(userId)} primary/>
        </Link>
    </div>
)

export default HomePage