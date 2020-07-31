// TODO require package bdd  : sequelize ?
// TODO require package unique-validator : est-ce compatible avec sequelize ?
// TODO ajouter la possibilité de supprimer son compte
// TODO voir si model particulier pour le modérateur



//TODO modifier parce que je n'utiliserai pas mongoose
// création du schéma des infos à stocker
const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

//Plugin pour la gestion des emails (un seul compte par email)
userSchema.plugin(uniqueValidator);

//Création du modèle User
module.exports = mongoose.model('User', userSchema);