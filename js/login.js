function handleLogin(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const loginMessage = document.getElementById('loginMessage');
  const errorMessage = document.getElementById('errorMessage');


  /*
  fetch( url for user endpoint )
    .then((res) => res.json())
    .then((data) => {
      // set cookie with user data?
      if role_id === 1, login as employee;
      if role_id === 2, login as manager
    })
    .catch((err) => {
      // handle error;
    });
  */

  // create users array for testing purposes, mocking data returned from server
  const users = [
    {
      username: 'ryansy',
      password: 'password123',
      first_name: 'Ryan',
      last_name: 'Sy',
      email:'ryanbsy@gmail.com',
      role_id: 1
    },
    {
      username: 'tonymontana',
      password: 'password123',
      first_name: 'Tony',
      last_name: 'Montana',
      email:'scarface@gmail.com',
      role_id: 2
    },
  ];

  for (let i = 0; i < users.length; i++) {
    if (email === users[i].email && password === users[i].password) {
      const user = users[i];
      Cookies.set('username', user.username);
      Cookies.set('fullName', `${user.first_name} ${user.last_name}`);
      if (user.role_id === 1) {
        window.location = `${window.origin}/employee-home`;
      }
      if (user.role_id === 2) {
        window.location = `${window.origin}/manager-home`;
      }
      loginMessage.style.color = 'green';
      loginMessage.innerHTML = 'Logging in...';
      return;
    } else {
      loginMessage.style.color = 'red';
      loginMessage.innerHTML = "Invalid credentials, please try again."
    }
  }

} // end handleLogin() function

const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', handleLogin);
