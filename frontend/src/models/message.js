// modèle de données
export default class Message {
    constructor(title, content, id, userId, messageId) {
      this.title = title;  //titre du message
      this.content = content;  //contenu
      this.id = id;  // id du message
      this.userId = userId;  //identifiant de l'utilisateur
      this.messageId = messageId // id (foreign key) que prendra un messsage de réponse
    }
  }