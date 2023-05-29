import multer from 'multer';
import { extname, resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const aleatorio = function() {
  return Math.floor(Math.random() * 10000 + 10000);
};

export default {
  fileFilter: (req, file, callback) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return callback(new multer.MulterError('Arquivo precisa ser PNG ou JPG'));
    }

    return callback(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, resolve(__dirname, '..', '..', 'uploads', 'images'));
    },
    filename: (req, file, callback) => {
      callback(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
    }
  })
};