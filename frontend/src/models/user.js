// modèle de données
export default class User {
    constructor(firstName, lastName, bio, email, password) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.bio = bio;
      this.email = email;
      this.password = password;
    }
  }