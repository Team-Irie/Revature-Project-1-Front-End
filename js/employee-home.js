const fullName = Cookies.get('fullName');

$(document).ready(function() {
  // print name in navbar
  $('#usernameContainer').text(fullName);

  // trigger submit reimbursement Modal
  $('#submitRequestButton').click(function() {
    alert('clicked');
  })
});
