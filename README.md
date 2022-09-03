
# Ecommerce Authentication

This Web App is Authentication of user.



## UI Featrutes

- User can sign-up with all the required details
- It does not resist you for validation
- On the successful registration, user can sign up with required details
- Now user could move to Home page as well as cart page
- Can add products to cart page, can increase the quantity or reduce the quantity of product from cart page

## Database

- Json server is created to store the date data od user


## Sign-In feature
- while signUp some part of data is stored to the local storage.
- If the signin fields data match with local storage user successfully login

## Authentication 
- while user signin, signin data is stored to the local storage agin with different key
- Protected component is created to protect unauthorized user to enter in cart page as well as Home page
- Protected can get the data from the local storage for the successful signin user
- If user is exist, let Him enter to Home and cart page

## API
**Products Api**

- https://fakestoreapi.com/products

**SignUp Api**

- http://localhost:3001/userData





## Tech Stack

**Client:** React, Redux, BootStrap, CSS



## Installation

Install **ecom-products-review** with npm

```bash
  npm install my-project
  cd my-project
```
    
## Run Locally

Clone the project

```bash
https://github.com/airKing05/react-eco-auth.git
```

Go to the project directory

```bash
  cd react-eco-auth
```

Install dependencies

```bash
  npm install
```

**Start the Rectjs**

```bash
  npm start
```

**Start the Json server**


```bash
  cd db

  json-server –watch db.json --port 3001
```
## Screenshots

- sign up page
![App Screenshot](https://github.com/airKing05/react-eco-auth/blob/master/screenshot/Screenshot%202022-09-03%20at%201.12.30%20PM.png?raw=true)

- sign in with invalid data
![App Screenshot](https://github.com/airKing05/react-eco-auth/blob/master/screenshot/Screenshot%202022-09-03%20at%201.02.27%20PM.png?raw=true)

- valid user sign in
![App Screenshot](https://github.com/airKing05/react-eco-auth/blob/master/screenshot/Screenshot%202022-09-03%20at%201.04.54%20PM.png?raw=true)

- Home page
![App Screenshot](https://github.com/airKing05/react-eco-auth/blob/master/screenshot/Screenshot%202022-09-03%20at%201.06.36%20PM.png?raw=true)

- Cart page
![App Screenshot](https://github.com/airKing05/react-eco-auth/blob/master/screenshot/Screenshot%202022-09-03%20at%201.08.54%20PM.png?raw=true)

