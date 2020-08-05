// Importation du package multer
const multer = require('multer');

//gestion du type MIME des fichiers images 
const MIME_TYPES = {
    'sgbdr/jpg' : 'jpg',
    'sgbdr/jpeg': 'jpg',
    'sgbdr/png' : 'png',
    'sgbdr/gif' : 'gif',
    'sgbdr/mp4' : 'mp4',
    'sgbdr/mov' : 'mov'
};

//Pour l'enregistrement des images
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'sgbdr');
    },
    //nom et extension du fichier + ajout timestamp pour creation d'un fichier daté
    filename: (req, file, callback) => {
        const name = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + Date.now() + '.' + extension);
    },
    // Pour bloquer les fichiers autres que jpg, jpeg, gif et png et vidéo mov ou mp4
    fileFilter: function (req, file, callback) {
        const extension = path.extname(file.originalname);
        if(extension !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg' && ext !== '.tiff ' && ext !== '.mov ' && ext !== '.mp4') {
            return callback(new Error( "Vous ne pouvez télécharger qu'un fichier image de type .jpg, .jpeg, .gif, ou le format vidéo .mov ou .mp4!" ))
        }
        callback(null, true)
    }
});

module.exports = multer({storage: storage}).single('sgbdr');