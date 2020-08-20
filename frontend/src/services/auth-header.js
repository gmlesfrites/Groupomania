export default function authHeader() {
    let user = JSON.parse(localStorage.getItem('groupomaniaUser'));
  
    if (user && user.accessToken) {
      return { Authorization: 'Bearer' +' '+ user.accessToken };       // for Node.js Express back-end
    } else {
      return {};
    }
  }