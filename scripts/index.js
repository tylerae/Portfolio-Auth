// setup comments
const comments = document.querySelector('.guides');

const setupComments = (data) => {

  if (data) {
    let html = '';
    Object.entries(data).forEach(entry => {
      const [key, value] = entry;
      const li = `
        <li>
          <div class="collapsible-header grey lighten-4">Click to view ${key}'s message.</div>
          <div class="collapsible-body white">${value}</div>
        </li>
      `;
      html += li;
    });
    comments.innerHTML = html;
  }else{comments.innerHTML = '<h5 class="center-align">Please sign in or create an account</h5>';}
}


// handle logged in and out user NAVBAR
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');

const setupUI = (user) => {
  if (user) {
    // toggle user UI elements
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
  }
  else {
    // toggle user elements
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');
  } 
};




// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  
  });
