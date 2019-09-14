import models from "../models";

const { Users } = models;

export default {
  async createUser(req, res) {
    let { username, email } = req.body;
    username = username && username.trim();
    email = email && email.trim();

    const requestBody = {
      ...req.body,
      username,
      email
    };

    const user = await Users.create(requestBody);

    const normalizedUser = {
      id: user.id,
      username: user.username,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      isAdmin: user.isAdmin
    };

    const responseObject = { ...normalizedUser };

    return res.status(201).send({
      data: { ...responseObject },
      status: 201
    });
  }
};
