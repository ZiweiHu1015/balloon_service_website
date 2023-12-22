
import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default class Products extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      name: '',
      description: '',
      price: 0,
      image:''
    };

  }

componentDidMount() {
  if (this.props.match && this.props.match.params) {
    axios.get('http://localhost:5000/event/'+this.props.match.params.id)
    .then(response => {
      this.setState({
        name: response.data.username,
        description: response.data.description,
        price: response.data.duration,
        image: response.data.image
      })   
      console.log(this.state);
    })
      .catch((error) =>{ 
        console.log(error);
        console.log("this is an error");
      })
}
}
   
    render() {
    return (
      <div><h1>This is single product page</h1></div>



    )
  }
}
