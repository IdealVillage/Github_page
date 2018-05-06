import { connect } from "react-redux";
import HomePage from "../components/HomePage";
import { changeUserId,fetchRequested } from "../actions/githubActions";

const mapStateToProps=(state)=>(
    {
        userId:state.userId
    }
)

const mapDispatchToProps=(dispatch)=>({
    onChangeUserId(e){
        dispatch(changeUserId(e.target.value))
    },
    onSubmitUserId(userId){
        dispatch(fetchRequested(userId))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage)