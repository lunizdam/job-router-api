
const Job = require("../model/job");

//get l'id

const getJobsID = (req, res) => {
    Job.find({ _id: req.params.jobID })
        .then((jobs) => {
            res.json(jobs);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
};
//get les jobs
const getJobs = (req, res) => {
    Job.find()
        .then((jobs) => {
            res.json(jobs);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
};
//créer un job
const createJob = (req, res) => {
    const job = new Job({
        company: req.body.company,
        logo: req.body.logo,
        logoBackground: req.body.logoBackground,
        position: req.body.position,
        postedAt: req.body.postedAt,
        contract: req.body.contract,
        location: req.body.location,
        website: req.body.website,
        apply: req.body.apply,
        description: req.body.description,
        requirementsContent: req.body.requirementsContent,
        roleContent: req.body.roleContent
    });
    job
        .save()
        .then((job) => {
            res.json(job);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
};
//update job
const updateJob = (req, res) => {
    Job.findOneAndUpdate(
        { _id: req.params.jobID },
        {
            $set: {
                company: req.body.company,
                logo: req.body.logo,
                logoBackground: req.body.logoBackground,
                position: req.body.author,
                postedAt: req.body.postedAt,
                contract: req.body.contract,
                location: req.body.location,
                website: req.body.website,
                apply: req.body.apply,
                description: req.body.description,
                requierementsContent: req.body.requierementsContent,
                roleContent: req.body.roleContent
            },
        },
        { new: true })
        .then((job) => {
            res.json(job);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
};
// suppression d'un job
const deleteJob = (req, res) => {
    Job.deleteOne({ _id: req.params.jobID })
        .then(() => res.json({ message: "oh ! job is Deleted" }))
        .catch((err) => res.send(err));
};

module.exports = {
    getJobs,
    createJob,
    updateJob,
    deleteJob,
    getJobsID
};