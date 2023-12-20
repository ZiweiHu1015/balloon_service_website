import React, { Component } from 'react';
import  { Row, Col, Image, Container,input, Card, Button} from "react-bootstrap";
import axios from 'axios';
import DatePicker from 'react-datepicker/dist/react-datepicker';

export default class ContactUs extends Component {
  constructor(props) {
    super(props);

    this.onChangeFullname = this.onChangeFullname.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeEventDate = this.onChangeEventDate.bind(this);
    this.onChangeStartTime = this.onChangeStartTime.bind(this);

    this.onChangeEndTime = this.onChangeEndTime .bind(this);
    this.onChangeEventLocation = this.onChangeEventLocation.bind(this);
    this.onChangeLocationType = this.onChangeLocationType.bind(this);
    this.onChangeBudget = this.onChangeBudget.bind(this);


    this.state = {
      fullname:'',
      email:'',
      phone: 0,
      eventDate: new Date(),
      startTime: '',
      endTime:'',
      eventLocation:'',
      locationType:'',
      budget:0
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/contactus/')
      .then(response => {
        if (response.data.length > 0) {
          console.log(response)
          this.setState({ contacts:response.data })
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }

    onChangeFullname(e){
      this.setState({
        fullname: e.target.value
      })
    }

    onChangeEmail(e){
      this.setState({
        email:e.target.value
      })
    }

    onChangePhone(e){
      this.setState({
        phone:e.target.value
      })
    }

    onChangeEventDate(e){
      this.setState({
        eventDate: e.target.value
      })
    }
    onChangeStartTime(e){
      this.setState({
        startTime:e.target.value
      })
    }
    onChangeEndTime(e){
      this.setState({
        endTime:e.target.value
      })
    }
    onChangeEventLocation(e){
      this.setState({
        eventLocation: e.target.value
      })
    }
    onChangeLocationType(e){
      this.setState({
        locationType: e.target.value
      })
    }
    onChangeBudget(e){
      this.setState({
        budget:e.target.value
      })
    }

    onSubmit(e) {
      e.preventDefault();
  
      const contact = {
        fullname: this.state.fullname,
        email: this.state.email,
        phone: this.state.phone,
        eventDate: this.state.eventDate,
        startTime: this.state.startTime,
        endTime: this.state.endTime,
        eventLocation: this.state.eventLocation,
        locationType: this.state.locationType,
        budget:this.state.budget,
      }
  
      console.log(contact);
  
      axios.post('http://localhost:5000/contactus/', contact)
        .then(res => console.log(res.data));
  
      window.location = '/';
    }





  render() {
    return (
    <main>
    <Container>
        <h3 className="text-center">Contact Us</h3>
      
        <form onSubmit = {this.onSubmit}>
          <Row>
            <Col>
            <div className="form-group">
              <label>Name</label>
              <input type="name" 
                     className="form-control" 
                     id="username"  
                     value = {this.state.fullname}
                     onChange = {this.onChangeFullname}
                     />
            </div>
            </Col>

            <Col>
            <div className="form-group">
              <label >Email</label>
              <input type="email" 
                     className="form-control" 
                     id="useremail" 
                     value = {this.state.email}
                     onChange={this.onChangeEmail}/>
            </div>
            </Col>
          </Row>

          <Row>
            <Col>
            <div className="form-group">
              <label>Phone</label>
              <input type="text" 
                     className="form-control" 
                     id="userPhone" 
                     value = {this.state.phone}
                     onChange={this.phone} />
             
            </div>
            </Col>
          </Row>

          <div className="form-group">
              <label>Event Type</label>
              <input type="text" 
                     className="form-control" 
                     id="eventType" 
                     placeholder= "Describe what type of event is it."
                     value = {this.state.locationType}
                     onChange={this.locationType}  />
          </div>

          <Row>
            <Col>
            <div className="form-group">
              <label >Event Date</label>
              <input type="Date" 
                     className="form-control" 
                     id="eventDate" 
                     value = {this.state.eventDate}
                     onChange={this.eventDate}/>
            
            </div>
            </Col>
          </Row>
          
          <Row>
          <Col>
          <div className="form-group">
              <label>Event Start Time</label>
              <input type="Time" 
                     className="form-control" 
                     id="starttime"
                     value = {this.state.startTime}
                     onChange={this.startTime} />
          </div>
          </Col>
          </Row>

          <div className="form-group">
              <label >Event End Time</label>
              <input type="Time" 
                     className="form-control" 
                     id="eventEndTime"
                     value = {this.state.endTime}
                     onChange={this.endTime} />
           
          </div>

          <div className="form-group">
              <label>Event Location</label>
              <input type="text" 
                     className="form-control" 
                     id="eventLocation"
                     value = {this.state.eventLocation}
                     onChange={this.eventLocation}  />
          </div>

          <div className="form-group">
              <label>Location Type</label>
              <input type="text" 
                     className="form-control" 
                     id="locationType"
                     value = {this.state.locationType}
                     onChange={this.locationType} />
          </div>
          <br></br>

          <div className="form-group form-check">
              <label>Your Budget</label>
              <input type="number" 
                     className="form-control"
                     id="budgetType" 
                     value = {this.state.budget}
                     onChange={this.budget}/>
            
              
          </div>
          <br></br>

          <button type="submit" className="btn btn-primary">Submit</button>


        </form>
   
    </Container>
    </main>
    )
  }
}
