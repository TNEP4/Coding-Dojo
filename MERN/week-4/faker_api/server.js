const { request, response } = require('express');
const express = require('express');
const faker = require('faker');
const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Create fake user data
const createUser = () => {
    const newUser = {
        id: faker.datatype.uuid(),
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        phonenumber: faker.phone.phoneNumberFormat(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
    return newUser;
};

// Log fake user
const newFakeUser = createUser();
console.log(newFakeUser);

// Create fake user data
const createCompany = () => {
    const newCompany = {
        id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address: [faker.address.streetAddress(), faker.address.city(), faker.address.state(), faker.address.zipCode(), faker.address.country()].join(", "),
    };
    return newCompany;
};
    
// Log fake company
const newFakeCompany = createCompany();
console.log(newFakeCompany);

// Create an api route "/api/users/new" that returns a new user
app.get("/api/users/new", (req, res) => {
    console.log("This is a new user");
    res.json(newFakeUser);
});

// Create an api route "/api/companies/new" that returns a new company
app.get("/api/companies/new", (req, res) => {
    console.log("This is a new company");
    res.json(newFakeCompany);
});

// Create an api route "/api/user/company" that returns both a new user and a new company
app.get("/api/user/company", (req, res) => {
    console.log("This is a new user and company");
    res.json({newFakeCompany, newFakeUser});
});


// Port 8000
app.listen(8000, () => console.log('Server started on port 8000'));