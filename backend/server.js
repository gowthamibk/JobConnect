const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

let jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Solutions",
    location: "Bangalore",
    type: "Full Time",
    category: "Development",
  },
  {
    id: 2,
    title: "Python Developer",
    company: "Innovate Labs",
    location: "Hyderabad",
    type: "Full Time",
    category: "Development",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Creative Studio",
    location: "Chennai",
    type: "Part Time",
    category: "Design",
  },
];

app.get("/", (req, res) => {
  res.json({
    message: "JobConnect API is running",
  });
});

// GET all jobs
app.get("/api/jobs", (req, res) => {
  res.json(jobs);
});

// GET one job
app.get("/api/jobs/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const job = jobs.find((job) => job.id === id);

  if (!job) {
    return res.status(404).json({
      message: "Job not found",
    });
  }

  res.json(job);
});

// POST a new job
app.post("/api/jobs", (req, res) => {
  const newJob = {
    id: jobs.length + 1,
    title: req.body.title,
    company: req.body.company,
    location: req.body.location,
    type: req.body.type,
    category: req.body.category,
  };

  jobs.push(newJob);

  res.status(201).json(newJob);
});

// DELETE a job
app.delete("/api/jobs/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const jobIndex = jobs.findIndex((job) => job.id === id);

  if (jobIndex === -1) {
    return res.status(404).json({
      message: "Job not found",
    });
  }

  const deletedJob = jobs.splice(jobIndex, 1);

  res.json({
    message: "Job deleted successfully",
    job: deletedJob[0],
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});