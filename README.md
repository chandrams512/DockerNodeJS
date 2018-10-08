# Node, Express, Postgres, Angular

## Starts cloning this project

* Just clone
  git clone https://github.com/chandrams512/DockerMaster.git

* Install all the node packages listed in the package.json
```
  npm install
```
* Open **../server/config/environments** and complete PostgreSQL database connection details

* Prepare the database (create table and populate)
  By using following Query
  ``` 
  CREATE TABLE scl_user(
  user_id serial PRIMARY KEY,
  username text NOT NULL,
  password text NOT NULL,
  email text NOT NULL,
  mobile_no text NOT NULL,
  created_on date,
  updated_by date,
  last_login date,
  login_attempts integer);
```
```
* Start the node project
```
  npm start
```

* Run node project on Browse
```
*  **http://localhost:3000**

```
