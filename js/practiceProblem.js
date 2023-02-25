const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
      {
        name: {
          common: "John",
          fullName: ["John", "Doe"]
        },
        age: 32,
        isMale: false,
        address: {
          street: "13/A St Joseph",
          house: 10,
        },
      },
      {
        name: {
          common: "Humayoun",
          fullName: ["Humayoun", "Kabir"]
        },
        age: 33,
        isMale: false,
        address: {
          street: "13/A St Lucia",
          house: 11,
        },
      },
    ]
  };

const showPerson = () => {
    const userContainer = document.getElementById('user-container');
    console.log()
    person.result.forEach( data  => {
        // console.log(data);
        const div = document.createElement('div');
        div.innerHTML =  `
        <div class="shadow-2xl p-4">
        <h5>Person Name: ${data.name.common}</h5>
        <p>Age: ${data.age}</p>
        <p>Street: ${data.address.street},  House No: ${data.address.house}</p>
       </div>
        `;
        userContainer.appendChild(div)
    });
}

showPerson()