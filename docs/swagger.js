const swaggerSpec = {
  openapi: "3.0.0",
  info: {
    title: "API Gestión de Residuos",
    version: "1.0.0"
  },
  paths: {
    "/api/auth/register": {
      post: {
        summary: "Registrar usuario",
        responses: {
          200: { description: "Usuario registrado" }
        }
      }
    },
    "/api/auth/login": {
      post: {
        summary: "Login usuario"
      }
    },
    "/api/reports": {
      get: {
        summary: "Obtener reportes"
      },
      post: {
        summary: "Crear reporte"
      }
    }
  }
};

export default swaggerSpec;