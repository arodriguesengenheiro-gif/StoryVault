const express = require("express");
const router = express.Router();

const projects = require("../data/projects");

// GET /projects
router.get("/projects", (req, res) => {
  res.status(200).json(projects);
});

// GET /projects/:id
router.get("/projects/:id", (req, res) => {
  const id = Number(req.params.id);

  const project = projects.find((project) => project.id === id);

  if (!project) {
    return res.status(404).json({
      message: "Project not found"
    });
  }

  res.status(200).json(project);
});

module.exports = router;