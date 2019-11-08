module.exports = {
    getAll (req, res){
        const db = req.app.get('db')
        db.get_all()
        .then(result => {
            res.status(200).send(result)
        })
    },
    postHouse (req, res){
        const db = req.app.get('db')
        const {name, address, city, state, zip} = req.body
        db.post_house([name, address, city, state, zip])
        .then(result => {
            res.status(200).send(result)
        })
    }
}