# Hey Mae! Let's code some React!

This project used `create-react-app` to make a react repo. Additionally, there is a REST API server that you will run locally. The endpoint is `http://localhost:2000/zodiac`)

## Things to know:
 - Take as long as you need to. No rush. It's practice
 - Use functional react. Down with classes! Up with hooks!
 - If you don't finish, who cares! This is just for you.

 ## Installation and set up.

 Ensure you have the following packages installed and updated to the latest versions:

- [NVM](http://nvm.sh/)
- [NodeJS](https://nodejs.org/en/)

Execute the following commands in your terminal to get started:

```sh
git clone https://github.com/jodinkansagor/react-kata.git
cd react-kata
nvm install
npm install
```

Start the local app development server:

```sh
npm start
```

In a separate terminal start the REST API server:

```sh
npm run server
```

Ok. So what's happening here?

We have a little express service that when you hit the endpoint `/zodiac`, it will return a list of zodiac signs. Pretty simple. What you need to do is create a react app where there is a landing page with a button on it. The button will send the fetch call to the service and then you need to display the list of signs in some way. 

## Resources

I set some stuff up for you. The react app is already initialized. I set up a the scaffolding of the LandingPage component and it is already imported into App.jsx. I also made the scaffolding of the `getZodiacSigns` fetch function. 

### `GET` /zodiac

Returns a list of zodiac signs, their element, and their animal/human representation. Each contains:

- id / house
- signName
- element
- representedBy

Example JSON response:

```json
[
  {
    "id": 1,
    "signName": "Aries",
    "element": "Fire",
    "representatedBy": "Ram"
  },
  {
    "id": 2,
    "signName": "Taurus",
    "element": "Earth",
    "representatedBy": "Bull"
  },
  {
    "id": 3,
    "signName": "Gemini",
    "element": "Air",
    "representatedBy": "Twins"
  },
]
```

### `GET` /zodiac/:signName

This is an endpoint that will get 1 sign at a time.

Example JSON response:

```json
[
  {
    "id": 1,
    "signName": "Aries",
    "element": "Fire",
    "representatedBy": "Ram"
  },
```