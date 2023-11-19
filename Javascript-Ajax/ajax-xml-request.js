onload = () => {
    document.getElementById('products_section').style.display = "none"
    document.getElementById('orders_section').style.display = "none"
}
function GetData() {

    let http_request = new XMLHttpRequest();

    http_request.open('GET', 'http://127.0.0.1:8000/api/product/', true)

    http_request.send();

    http_request.onload = () => {

        if (http_request.status === 200) {

            let customer_data = JSON.parse(http_request.responseText)

            console.log(customer_data);
            
            RenderData(customer_data)
        }

        else if (http_request.status === 404){
            console.log("page not found");
        }
    }

}

GetData()

function RenderData(customer_data) {

    for (let customer of customer_data) {
                
        let table = document.getElementById('customer-table')

        let table_body = table.getElementsByTagName('tbody')[0]

        let new_row = table_body.insertRow()

        new_row.innerHTML = 

        `
        <td>${customer.id}</td>
        <td>${customer.name}</td>
        <td>${customer.username}</td>
        <td>${customer.age}</td>
        <td><button id=${customer.id} class="btn btn-info text-white"  onclick="Edit(this)">Edit</button></td>
        <td><button class="btn btn-danger" onclick="Delete(this)">Delete</button></td>
        `

    }
}

function PostData() {

    let table = document.getElementById('customer-table').getElementsByTagName('tbody')[0]

    table.innerHTML = ''

    formData = {}

    formData['name'] = document.getElementById('customer_name').value 
    formData['username'] = document.getElementById('username').value 
    formData['age'] = document.getElementById('age').value 
    
    let http_request = new XMLHttpRequest();

    http_request.open('POST', 'http://127.0.0.1:1000/basic/test/', true)

    http_request.setRequestHeader('Content-Type', 'application/json')

    http_request.send(JSON.stringify(formData))

    http_request.onload = () => {

        if (http_request.status === 200) {

            let customer_data = JSON.parse(http_request.responseText)

            let customer_form = document.getElementById('customer_form')

            customer_form.reset()
            
            RenderData(customer_data['data'])
        }
    }
}

let id_to_update = 0

function Edit(x) {

    data = x.parentElement.parentElement

    console.log(data)

    newData = data.rowIndex

    console.log(newData, "newData")

    let table = document.getElementById('customer-table');

    id = Number(table.rows[newData].cells[0].innerHTML)

    console.log(id, "id")

    document.getElementById('customer_name').value = table.rows[newData].cells[1].innerHTML
    document.getElementById('username').value = table.rows[newData].cells[2].innerHTML
    document.getElementById('age').value = table.rows[newData].cells[3].innerHTML

    id_to_update = id
    
}

function UpdateData() {

    let table = document.getElementById('customer-table').getElementsByTagName('tbody')[0]

    table.innerHTML = ''

    let formData = {}

    formData['name'] = document.getElementById('customer_name').value 
    formData['username'] = document.getElementById('username').value 
    formData['age'] = document.getElementById('age').value 

    let http_request = new XMLHttpRequest();

    http_request.open('PUT', `http://127.0.0.1:1000/basic/test/${id_to_update}/`, true)

    http_request.setRequestHeader('Content-Type', 'application/json')

    http_request.send(JSON.stringify(formData))

    http_request.onload = () => {

        if (http_request.status === 200) {

            let customer_data = JSON.parse(http_request.responseText)

            let customer_form = document.getElementById('customer_form')

            customer_form.reset()
            
            RenderData(customer_data['data'])
        }
    }
}

function Delete(x) {

    data = x.parentElement.parentElement

    console.log(data);

    newData = data.rowIndex

    console.log(newData, "newData")

    let table = document.getElementById('customer-table');

    let id = Number(table.rows[newData].cells[0].innerHTML)

    let http_request = new XMLHttpRequest();

    http_request.open('Delete', `http://127.0.0.1:1000/basic/test/${id}/`, true)

    http_request.send()

    http_request.onload = () => {

        if (http_request.status === 200) {

            let customer_data = JSON.parse(http_request.responseText)

            let customer_form = document.getElementById('customer_form')

            customer_form.reset()

            let table_body = document.getElementById('customer-table').getElementsByTagName('tbody')[0]

            table_body.innerHTML = ''
            
            RenderData(customer_data['data'])
        }
    }
}



function CustomersPage() {
    document.getElementById('customer_section').style.display = "block"
    document.getElementById('products_section').style.display = "none"
    document.getElementById('orders_section').style.display = "none"
}

function ProductsPage() {
    document.getElementById('products_section').style.display = "block"
    document.getElementById('customer_section').style.display = "none"
    document.getElementById('orders_section').style.display = "none"
}

function OrdersPage() {
    document.getElementById('orders_section').style.display = "block"
    document.getElementById('products_section').style.display = "none"
    document.getElementById('customer_section').style.display = "none"
}