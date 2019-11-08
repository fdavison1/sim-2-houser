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
        const {name, address, city, state, zip, img, mortgage, rent} = req.body
        db.post_house([name, address, city, state, zip, img, mortgage, rent])
        .then(result => {
            res.status(200).send(result)
        })
    },
    deleteHouse (req, res){
        const db = req.app.get('db')
        db.delete_house(req.params.id)
        .then(result => {
            res.status(200).send(result)
        })
    }
}