## E-Wallet

## An Expense Management and budgeting app

### Features
* 

### Features Todo
* Create user and login and auth etc
* Create multiple accounts for a user
* Dashboard with basic anaysis
* Add records for Income and Expenses along with date, text notes, mode, etc.
* Transfer within accounts and to External accounts
* Export data as csv
* Reports in pdf with monthly data
* Adjust balance
* Insights and graphs based on income and expenses

### Tech Used
* <ins>Nodejs</ins> - Creating Rest API's and processing data
* <ins>Mongodb and Mongo Atlas</ins> - Data storage
* <ins>Vuejs</ins> - Frontend design and computations
* Visualisations and charts
* Templating
* Hosting
* Eslint - linting
* Postman - API testing
* Morgan - logging
* Joi - validations

### Run the app
1. #### Frontend
* Create
  ```bash
  vue create frontend
  ```

* Run
  ```bash
  cd frontend
  npm run serve
  # App running at http://localhost:8080/
  ```

2. #### Backend
* Create
  ```bash
  cd backend
  npm init
  npm i express body-parser path concurrently mongoose
  npm i nodemon --save-dev
  npm i eslint -D
  # add eslint to package json
  npm run lint -- --init
  npm i morgan
  npm i joi
  ```

* Create a project and a cluster on Mongo Atlas and add users

* Run
  ```bash
  cd backend
  npm start
  ```
    