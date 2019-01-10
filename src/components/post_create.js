import React , {Component} from 'react';
import {Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import {createPost} from '../actions/index';

class Post extends Component{
    
    
    renderField(field){
     return(
    <div className ="form-group">
      <input className = "form-control"
      type="text"
      {...field.input}/> 
    </div>
)
    }
    onSubmit(values){
        this.props.createPost(values);
        console.log(values);
    }
    render(){
        const {handleSubmit} = this.props;
        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                label = 'Title'
                name= 'title'
                component={this.renderField}
                />
                <Field
                label = 'ISBN NO'
                name= 'ISBN'
                component={this.renderField}
                />
                <button type = "submit" className="btn btn-primary">BUTTON</button>
            </form>
        );
    }
}
function validate(values){
    const errors = {};
    return errors;
}
export default reduxForm({
    validate,
    form: 'reduxforms'
})(
   connect(null,{createPost})(Post)
);