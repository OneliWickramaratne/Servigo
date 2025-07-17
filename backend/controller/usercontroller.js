import User from '../models/user.js';
import bcrypt from 'bcryptjs';
export function registerUser(req, res) {
  const data = req.body;

  // Handle image upload
  if (req.file) {
    data.profilePicture = req.file.filename;
  }

  if (!data.password || typeof data.password !== 'string') {
    return res.status(400).json({ error: 'Password is required and must be a string' });
  }

  // Hash password
  data.password = bcrypt.hashSync(data.password, 10);

  const newUser = new User(data);

  newUser.save()
    .then(() => {
      res.json({ message: 'User registered successfully' });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'User registration failed' });
    });
}