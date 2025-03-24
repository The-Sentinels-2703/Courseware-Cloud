import User from "../models/userModel.js";

export const createUser = async (username, department, email, password) => {
  const user = await User.create({ username, department, email, password });
  return "user created";
};

export const getUsers = async () => {
  const users = await User.findAll(); 
  return users;
};

export const findUser = async (username) => {
  const result = await User.findOne({ where: { username: username } });
  return result;
};

export const updateUser = async (username, newEmail) => {
  const result = await User.update({ email: newEmail }, { where: { username: username } });
  return "user updated";
};

export const deleteUser = async (username) => {
  const result = await User.destroy({ where: { username: username } });
  return "user deleted";
};