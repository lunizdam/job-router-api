const { getJobs, createJob, updateJob, deleteJob, getJobsID } = require("./controllers/job");

const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("Let's build a CRUD API!");
});

module.exports = router;
router.get("/jobs", getJobs);
router.get("/jobs/:jobID", getJobsID)
router.post("/jobs", createJob);
router.put("/jobs/:jobID", updateJob)
router.delete("/jobs/:jobID", deleteJob);
