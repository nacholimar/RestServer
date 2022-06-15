# WebServer + Rest Server

## This project is a users CRUD created in Node.JS

Remember execute '''npm install''' for build all Node modules

You can test this project from: https://restserver-nacholimar.herokuapp.com

### Using the Collection

[![Run in Postman](https://run.pstmn.io/button.svg)](https://www.getpostman.com/collections/a8831df67b3af7c7298e)

### Examples
Using the `POST Create a New User` request from the collection, inspect the data in the `Body` tab. The request body should look like this:
```json
{
"nombre":"test16",
"google":true,
"correo":"test16@test.com",
"password":"123456",
"rol":"USER_ROLE"
}
```

If you're happy with the data, press `Send` on the UI or hit `Ctrl+Enter` to create the new user. You can use the `UsersGet` request to see the new user, as well as the all the other users with the json file. 

For the select users, you can add `desde` and `limite` parameters. For example:
```txt
/api/users?desde=0&limite=4
```
