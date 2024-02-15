import User from "../models/User.js";
import Users from "../models/User.js";
import {sendEmailVerification} from "../emails/AuthEmailService.js";
import { generateJWT } from "../utils/index.js";


const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (Object.values(req.body).includes("")) {
    const error = new Error("todos los campos son obligatorios");
    return res.status(400).json({ msg: error.message });
  }

  if (password.trim().length < 6 || password.trim().length > 12) {
    const error = new Error(
      "la contraseña debe ser minimo de 6 caracteres y maximo de 12"
    );
    return res.status(400).json({ msg: error.message });
  }

  const userExistMail = await Users.findOne({ email });
  if (userExistMail) {
    const error = new Error("el email ya existe");
    return res.status(400).json({ msg: error.message });
  }

  try {
    const user = new User({ name, email, password });
    const result = await user.save();
    sendEmailVerification(email, result.token);
    res.json({ msg: "Usuario creado, revisa tu email" });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await Users.findById(id);
  if (!user) {
    const error = new Error("Usuario no encontrado");
    return res.status(404).json({ msg: error.message });
  }
  try {
    await Users.findByIdAndDelete(id);
    res.json({ msg: `Usuario ${user.name} eliminado` });
  } catch (error) {
    console.log(error);
  }
}


const VerifyAccount = async (req, res) => {
  const { token } = req.params;
  const user = await Users.findOne({ token });
  if (!user) {
    const error = new Error("Token no valido");
    return res.status(401).json({ msg: error.message });
  }
  try {
    user.token = null;
    user.verified = true;
    await user.save();
    res.json({ msg: "Cuenta verificada" });
  } catch (error) {
    console.log(error);
  }
}

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await Users.findOne({ email });
  if (!user) {
    const error = new Error("el email no existe");
    return res.status(400).json({ msg: error.message });
  }

  if (!user.verified) {
    const error = new Error("la cuenta no ha sido verificada");
    return res.status(400).json({ msg: error.message });
  }

  if(await user.chweckPassword(password)){
    const token = generateJWT(user._id);
    
    res.json({
      token
    })
  }else{
    const error = new Error("la contraseña es incorrecta");
    return res.status(400).json({ msg: error.message });
  }
  }

  const user = async (req, res) => {
    const { user } = req;
    res.json(user);
  }

export { register, getUsers , deleteUser ,VerifyAccount , login , user };
