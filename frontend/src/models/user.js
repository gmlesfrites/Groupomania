// modèle de données
export default class User {
    constructor(firstname, lastname, bio, email, password) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.bio = bio;
      this.email = email;
      this.password = password;
    }
  }