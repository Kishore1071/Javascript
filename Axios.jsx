import React, { Component } from 'react'
import axios from 'axios'

class Axios extends Component {


    constructor(props) {
      super(props)
    
      this.state = {
         customer_data: []
      }
    }

    componentDidMount() {

        axios.get('http://127.0.0.1:8000/test/post')
        .then(response => {
            this.setState({
                customer_data: response.data
            },
            () => console.log(this.state.customer_data))
        })
        .catch(error => console.log(error))
    }

    render() {

        const {customer_data} = this.state

        let render_data = customer_data.length > 0 ? customer_data.map(customer => {

            return (
                <tr key={customer.id}>
                    <td>Customer's Username : {customer.username}</td>
                    <td>Customer's Name : {customer.customer_name}</td>
                    <td>Customer's Age : {customer.age}</td>
                </tr>
            )

        }) : <tr>No Data Found</tr>

        return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Customer Name</th>
                        <th>Customer Age</th>
                    </tr>
                </thead>
                <tbody>
                    {render_data}
                </tbody>
            </table>
        </div>
        )
    }
}

export default Axios