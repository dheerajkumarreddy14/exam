
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';
import { Card } from 'antd';
import { Row, Col} from 'antd';
import { Button } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  componentWillMount(){
   this.props.fetchPosts()
  }
  
 

  renderList = (posts) =>{
    if(posts){
          return posts.map((post)=>{
      return(
        <div>
     
      
        <div style={{ background: 'skyblue', padding: '30px' }}>
        <Row>
      <Col span={8}>
      <Card  bordered={false} style={{ width: 300 }}>
      <p>{post.title}</p>    
      <p>{post.author}</p>
      <p>{post.subTitle}</p>
      <p>{post.description}</p>
      <p>{post.publisher}</p>

    </Card>
      </Col>
      {/* <div className= "text-xs-right">
        <Link className= "btn btn-primary" to="/api/book">
        Add Book
        </Link> */}
          {/* </div> */}
      <Col span={8} offset={8}>
      <Button type="primary">VIEW</Button>
      <Button type="primary">DELETE</Button>

      

    

      
      
      </Col>
    </Row>
    
    </div>
        
               
  </div> 
      
      )
    })
  }
  }
 
  render() {
    console.log(this.props.posts);
    return (
      <div>
        <h1 style={{backgroundColor:"#FF0000",color:"white",textAlign:"center"}}>BOOKS FINDER</h1>
        <div>  <Button style ={{ backgroundColor:"yellow",float:"right"}}type="dashed">ADD A BOOK TO LIST(/api/book)</Button></div>
    <ul>{this.renderList(this.props.posts)}</ul>
    </div> 
  
     
    

    );
  }
}
function mapStateToProps(state){
  return {posts:state.posts}
}
export default connect(mapStateToProps,{fetchPosts}) (App);
