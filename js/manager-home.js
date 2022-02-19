const fullName = Cookies.get('fullName');

$(document).ready(function() {
  // print name in navbar
  $('#usernameContainer').text(fullName);
  $('#viewEmployees').click(function() {
    fetch(`${window.origin}/users`)
      .then(res => console.log(res));
  });
});
