const express = require("express")
const router = express.Router();

var experiences  = [];

router.use("/", (req, res, next) => {
    console.log("API request received");
    next();
});

router.get("/intro", (req, res) => {
    res.status(200).json({
      name: "Sai Ram",
      university: "Engineering College",
      major: "Computer Science",
    });
  });
  
  router.get("/experience", (req, res) => {
    res.status(200).json(experiences);
  });
  
    router.put("/:id", (req, res) => {
      const expIndex = parseInt(req.params.id);
      if (expIndex >= 0 && expIndex < experiences.length) {
        // Update the experience at the found index
        experiences[expIndex] = { ...experiences[expIndex], ...req.body };
        res.status(200).json({ message: "Experiences updated successfully" });
      } else {
        res.status(404).json({ message: "Experiences not found" });
      }
    });
    
    router.delete("/:id", (req, res) => {
      const expIndex = parseInt(req.params.id);
    
      if (expIndex >= 0 && expIndex < experiences.length) {
        // Delete the experience at the found index
        // delete one element at the  expIndex
        experiences.splice(expIndex, 1);
        res.status(200).json({ message: "Experience deleted successfully" });
      } else {
        res.status(404).json({ message: "Experience not found" });
      }
    });
    
    router.post("/experience", (req, res) => {
      const newExperience = req.body;
      experiences.push(newExperience); //say you got a new job
      res.status(201).json({ message: "New job was added" });
    });
    
    module.exports = router;