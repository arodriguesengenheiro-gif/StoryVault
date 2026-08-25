const express = require("express");

const app = express();

app.use(express.json());

const healthRoutes = require("./routes/health.routes");
const projectsRoutes = require("./routes/projects.routes");

app.use(healthRoutes);
app.use(projectsRoutes);

module.exports = app;