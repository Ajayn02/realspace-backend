const saves = require('../models/postsaveModel')

exports.addSave = async (req, res) => {
    try {
        const saveId = req.payload
        const { title, location, price, area, apartment, specialities, landmark, googlemap, userId, image, _id } = req.body
        // console.log(req.body);
        const existing = await saves.findOne({ saveId, postId: _id })
        if (existing) {
            res.status(406).json("Already added")
        } else {
            const newSave = new saves({
                title, location, price, area, apartment, specialities, landmark, googlemap, userId, image, saveId, postId: _id
            })
            await newSave.save()
            res.status(200).json(newSave)
        }

    }
    catch (err) {
        res.status(400).json(err)
    }

}

exports.getSaved = async (req, res) => {
    try {
        const saveId = req.payload
        const savedItems = await saves.find({ saveId })
        res.status(200).json(savedItems)
    }
    catch (err) {
        res.status(400).json(err)
    }

}

exports.unsave = async (req, res) => {
    try {
        const { id } = req.params
        const val = await saves.findOneAndDelete({ _id: id })
        res.status(200).json(val)
    }
    catch (err) {
        res.status(400).json(err)
    }
}