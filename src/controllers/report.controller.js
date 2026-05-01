export const createReport = (req, res) => {
  res.json({
    message: "Reporte creado",
    data: req.body
  });
};

export const getReports = (req, res) => {
  res.json([
    { id: 1, description: "Basura en esquina" }
  ]);
};