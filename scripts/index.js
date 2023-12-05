const comments = document.querySelector('.guides');

// setup comments
const setupComments = (data) => {
  let html = '';
  Object.entries(data).forEach(entry => {
    const [key, value] = entry;
    const li = `
      <li>
        <div class="collapsible-header grey lighten-4">${key}</div>
        <div class="collapsible-body white">${value}</div>
      </li>
    `;
    html += li;
  });
  comments.innerHTML = html;
}

const ouputNotSignedIn = document.querySelector('.random-out');

const isLoggedOut = () => {
  ouputNotSignedIn.innerHTML = `
    <div class="collapsible-header gret lighten-4">
      <div>You Need to sign in to view comments. If you would like to skip login and go straight to the Portfolio Web Site, click the Portfolio tab above.</div>
    </div>
  `;
}


// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  
  });