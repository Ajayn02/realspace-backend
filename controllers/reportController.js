const reports = require('../models/reportModel')
const otherReports = require('../models/otherReportModel')


exports.addReport = async (req, res) => {
    try {
        const userId = req.payload
        const { postId } = req.body

        const existing = await reports.findOne({ userId, postId })
        if (existing) {
            res.status(406).json("already reported")
        } else {
            const newReport = new reports({
                userId, postId
            })
            await newReport.save()
            res.status(200).json(newReport)
        }
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err)
    }

}

exports.getReports = async (req, res) => {
    try {
        const allReports = await reports.find()
        res.status(200).json(allReports)
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err)
    }

}

exports.delReports = async (req, res) => {
    try {
        const { id } = req.params
        const exist = await reports.findOneAndDelete({ _id: id })
        res.status(200).json(exist)
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err)
    }

}


// otherReports

exports.addOtherRep = async (req, res) => {
    try {
        const userId = req.payload
        const { problem } = req.body

        const newOtherReport = new otherReports({
            userId, problem
        })
        await newOtherReport.save()
        res.status(200).json(newOtherReport)
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err)
    }

}

exports.getOtherRep = async (req, res) => {
    try {
        const val = await otherReports.find()
        res.status(200).json(val)
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err)
    }

}

exports.delotherRep = async (req, res) => {
    try {
        const { id } = req.params
        const exist = await otherReports.findOneAndDelete({ _id: id })
        res.status(200).json(exist)
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err)
    }

}