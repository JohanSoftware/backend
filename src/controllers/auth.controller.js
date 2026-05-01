export const register = async (req, res) => {
  const { email, password } = req.body;

  res.json({
    message: "Usuario registrado",
    email
  });
};

export const login = async (req, res) => {
  const { email } = req.body;

  res.json({
    message: "Login exitoso",
    token: "fake-jwt-token"
  });
};