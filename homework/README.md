# FS-full-stack-app-todo-server

Use this repository to build the backend server for your full-stack todo application.

## Objectives

- Build a server using Express
- Connect your server to a MySQL database

## Getting Started

Follow the steps below to install your dependencies and start your server:

```
npm install
npm run start
```

### Database Prep

Create `.env` file in project root and copy the contents of the `.env.example` file in the `.env` file.

### Creating the Database - MySQL Workbench

- Copy the SQL queries from the `db.sql` file in the `src/db` folder.
- Open MySQL workbench and paste the query.
- Click on the button to run all selected text making sure you have highlighted all the text in the workbench.
- You can verify if the database and the tables are created

## Basic Requirements

### 1. Read through all the current code and explain it to your partner.

- [ ] Explain what each line of code is doing.
  - Look at the docs and ask your instructor if you aren't sure!

### 2. Finish the routes

Suggested Process:

- Try and write the correct query in `mysql`.
- Use that query to finish the endpoint in `routes/api.js`.
- Test your endpoint using Postman.

To Do:

- [ ] Use Postman to confirm that you have completed these correctly
- [ ] GET `/api/todos` should retrieve all resources.
  - This route is almost complete!
- [ ] POST `/api/todos` should create a new resource.
  - To test that your query is correct, check to see if your new resource exists using `mysql`.
  - To test your route, use Postman to see if GET `api/todos` returns your new resources.
- [ ] PUT `/api/todos/:id` should replace a resource.
  - To test that your query is correct, check to see if your updated resource exists using `mysql`.
  - To test your route, use Postman to see if GET `api/todos` includes your updated resources.
- [ ] DELETE `/api/todos/:id` should delete a resource.
  - To test that your query is correct, check to see if your resource was deleted using `mysql`.
  - To test your route, use Postman to see if GET `api/todos` does not include your new resources.

## Resources

- [MySQL Cheat Sheet](http://www.mysqltutorial.org/mysql-cheat-sheet.aspx)
- [MySQL](https://dev.mysql.com/doc/refman/8.0/en/database-use.html)

## Notes

_This is a student project that was created at [CodeOp](http://CodeOp.tech), a full stack development bootcamp in Barcelona._
