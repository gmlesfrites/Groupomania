// modèle de données
export default class User {
    constructor(firstname, lastname, bio, email, password, id) {
      this.firstname = firstname; // prénom de l'utilisateur
      this.lastname = lastname;  // nom de l'utilisateur
      this.bio = bio; // petite bio sur le profil
      this.email = email;  // email
      this.password = password;   // mot de passe
      this.id = id;
    }
  }