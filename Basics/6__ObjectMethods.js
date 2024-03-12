// Objects are used to store properties and the methods of real time things as a single unit, objects follows key value pais structure and consists of multiple key value pairs


const person_details = {
    "first_name": "Kishore",
    "last_name": "M",
    "age": 25,
    "date_of_birth": "1998-03-24",
    "designation": "Software Developer",
    "is_manager": false,
}

`Accessing Existing Properties`

person_details.first_name  // or
person_details['first_name']


`Adding New Properties`

person_details['marital_status'] = false


`Updating Properties`

person_details['first_name'] = "Kishore M"


`Deleting Existing Properties`

delete person_details.age


