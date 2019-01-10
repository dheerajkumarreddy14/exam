import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost} from '../actions';

class ShowId extends Component{
    componentDidMount(){
        const {ISBN} = this.props.match.params;
        this.props.fetchPost(ISBN);
    }
render(){
    const {post} = this.props;
    if(!post){
        return <div>...loading</div>
    }
    return(
        <div>
            <h3>{post.author}</h3>
            
        </div>
    );
}
 
}
function mapStateToProps({posts},ownProps){
    return {post:posts[ownProps.match.params.ISBN]};
}
export default connect(mapStateToProps,{fetchPost})(ShowId);