const express = require("express");
const app = express();

// data
const data = require('./data.js')

app.get('/', (req, res) => {
  // const name = "vipin"
  res.send(`
    <h1>home page</h1>
     <input type="text" id="username" placeholder="find user by name">
    <a href="" onclick="show()" id="finduser">find user</a>

    <script>
        function show() {
            const name = document.getElementById('username').value
            document.getElementById('finduser').href = "/user/?name="+ name
            console.log(name)
        }
    </script>
    `);
});
app.get('/user', (req, res) => {
  let reqName = req.query.name;
  let foundUser;
  data.map((user) => {
    if (user.name === reqName) {
      foundUser = user
    }
  });

  res.send(`
       <table border="1">
  <tr>
    <th colspan="2">User Data</th>
  </tr>
  <tr>
    <th>Name</th>
    <th>Email</th>
  </tr>
  <tr>
    <td>${foundUser.name}</td>
    <td>${foundUser.email}</td>
  </tr>
</table>

        `)
})
app.listen(5000, () => {
  console.log("Server running......")
});

