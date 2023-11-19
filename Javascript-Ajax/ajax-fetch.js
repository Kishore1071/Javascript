function PostApi() {

    let formData = {}

    formData['name'] = document.getElementById('name').value
    formData['age'] = document.getElementById('age').value
    formData['username'] = document.getElementById('username').value

    console.log(formData)


    fetch('http://127.0.0.1:8000/basic/test/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.log(error))

    location.reload()
}

function GetApi() {
    fetch('http://127.0.0.1:8000/basic/test/')
    .then(response => response.json())
    .then(data => {
        console.log(data)

        for(let x of data) {
            console.log(x)

            let table = document.getElementById('user_list').getElementsByTagName('tbody')[0];

            let new_row = table.insertRow();

            new_row.innerHTML = 
            `
            <td>${x.id}</td>
            <td>${x.name}</td>
            <td>${x.age}</td>
            <td>${x.username}</td>
            <td><button class="btn btn-info" onclick="Edit(this)">Edit</button></td>
            <td><button class="btn btn-danger" onclick="Delete(this)">Delete</button></td>
            `
        }

    })
    .catch(error => console.log(error))

}

GetApi()

let id_to_update = 0

console.log(id_to_update, "initial")

function Edit(x) {

    data = x.parentElement.parentElement

    console.log(data)

    newData = data.rowIndex

    console.log(newData, "newData")

    let table = document.getElementById('user_list');

    id = Number(table.rows[newData].cells[0].innerHTML)

    console.log(id, "id")

    document.getElementById('name').value = table.rows[newData].cells[1].innerHTML
    document.getElementById('age').value = table.rows[newData].cells[2].innerHTML
    document.getElementById('username').value = table.rows[newData].cells[3].innerHTML

    id_to_update = id

    console.log(id_to_update, "id_to_update")
}

function Update() {
    console.log(id_to_update, "Update Function")

    let formData = {}

    formData['name'] = document.getElementById('name').value
    formData['age'] = document.getElementById('age').value
    formData['username'] = document.getElementById('username').value

    console.log(formData)

    fetch(`http://127.0.0.1:8000/basic/test/${id_to_update}/`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.log(error))

    location.reload()
}

function Delete(x) {

    if(confirm("Sure want to delete this row!")) {
        data = x.parentElement.parentElement

        newData = data.rowIndex

        console.log(newData, "newData")

        let table = document.getElementById('user_list').getElementsByTagName('tbody')[0];

        id = Number(table.rows[newData - 1].cells[0].innerHTML)
        
        console.log(id)
        fetch(`http://127.0.0.1:8000/basic/test/${id}/`, {
            method: 'DELETE',
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => console.log(error))

        location.reload()
    }
}