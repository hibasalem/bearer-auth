# bearer-auth

this project is a practice prioject for lab 07 of 401 course at asac

- **Author** : hiba salem

- ### description

Authentication Server Phase 2: Token (Bearer) Authentication

---

- ### NML

![NML](./lab07.jpg)

---

- ### [PR](https://github.com/hibasalem/bearer-auth/pull/1)

---

- ### deploy links

  - [ deployment](https://bearer-authmain.herokuapp.com)

  - [tests report](https://github.com/hibasalem/bearer-auth/actions)

---

- ### getting this app

  - clone and npm i --production.
  - npm start or nodemon

---

- ### Setup

  - `.env requirements`
  - `PORT` - Port Number
  - `MONGODB_URI` - mongo link

---

- ### end points

  - post `/signup`

  - data `{ username: 'hiba', password: '12345'};`

  ```
  {
    "user": {
        "_id": "60e34e3414ee1012c01fa32f",
        "username": "hiba2",
        "password": "1234",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhpYmEyIiwiaWF0IjoxNjI1NTA5NDI4fQ.VgU7Bghyb2x8TjGRA000xrEN0UyCMTvCcFfLKzrKGKo"
  }

  ```

  - post `/signin`

  - data `{ username: 'hiba', password: '12345'};`

  ```
  {
    "_id": "60e22052a457e17b38c76013",
    "username": "hiba",
    "password": "$2b$10$9IrrHcpcZdHXLWNi.B9ZheFC9gtNytKHtgQD4WkfEhZJJZ2ZzMW9u",
    "__v": 0
  }

  ```

  - post `/api/v1/signin`

  - data `{ username: 'hiba0000', password: '12345000000'};`

  ```
  {
    "_id": "60e22052a457e17b38c76013",
    "username": "hiba",
    "password": "$2b$10$9IrrHcpcZdHXLWNi.B9ZheFC9gtNytKHtgQD4WkfEhZJJZ2ZzMW9u",
    "__v": 0
  }

  ```

  - `/`

  ```

  {
  home route
  }

  ```

---

- ### test this app

  - clone and npm i -D.
  - npm test

---
