import React from "react";
import { Link } from "react-router-dom";
import { 
    Card,
    CardActions,
    CardHeader,
    CardText 
} from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import ActionHome from "material-ui/svg-icons/action/home";

const GithubBox=({data,userId})=>(
    <div>
        <Card>
            <CardHeader 
                title={data.name}
                subtitle={userId}
                avatar={data.avatar_url}
            />
            <CardText>
                Followers:{data.followers}
            </CardText>
            <CardText>
                Following:{data.following}
            </CardText>
            <CardActions>
                <Link to='/'>
                    <RaisedButton 
                        label="Back"
                        icon={<ActionHome />}
                        secondary={true}
                    />
                </Link>
            </CardActions>
        </Card>
    </div>
)

export default GithubBox