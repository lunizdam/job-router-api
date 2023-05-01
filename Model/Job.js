const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
    company: {
        type: String
    },
    logo: {
        type: String

    },
    logoBackground: {
        type: String

    },
    position: {
        type: String

    },
    postedAt: {
        type: Date,
        default: Date.now
    },

    contract: {
        type: Boolean

    },

    location: {
        type: String

    },
    website: {
        type: String

    },
    apply: {
        type: String

    },
    description: {
        type: String
    },
    requirementsContent: {
        type: String
    },
    roleContent: {
        type: String
    }

});

module.exports = mongoose.model("Job", JobSchema);
