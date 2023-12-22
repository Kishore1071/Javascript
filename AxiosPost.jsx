import React, { Component } from 'react'
import axios from 'axios'

class AxiosPost extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        username: '',
        customer_name: '',
        age: ''
      }
    }

    InputHandler = event => {
     this.setState({
        [event.target.name] : event.target.value
     })
    }

    SubmintHandler = (event) => {

        event.preventDefault()

        console.log(this.state)

        axios.post('http://127.0.0.1:8000/test/post/', this.state)
        .then(response => {
            console.log(response.data)
            this.setState({
                username: '',
                customer_name: '',
                age: ''
            })
            
        })
        .catch(error => console.log(error))

    }


    render() {
        return (
        <div>
            <form onSubmit={this.SubmintHandler}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" name='username'  value={this.state.username} onChange={this.InputHandler}/>
                </div>
                <div>
                    <label htmlFor="customer_name">Customer Name</label>
                    <input type="text" name='customer_name' value={this.state.customer_name} onChange={this.InputHandler}/>
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input type="number" name='age' value={this.state.age} onChange={this.InputHandler}/>
                </div>
                
                <input type="submit" />
            </form>
        </div>
        )
    }
}

export default AxiosPost