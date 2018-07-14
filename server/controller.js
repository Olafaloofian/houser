module.exports = {
    read(req, res, next) {
        const dbInstance = req.app.get('db')

        dbInstance.read()
        .then( houses => res.status(200).send(houses))
        .catch( err => {
            res.status(500).send('Server read error')
            console.log(err)
        })
    },

    create(req, res, next) {
        const dbInstance = req.app.get('db')
        const { name, address, city, state, zip, url, monthlyMortgage, rent } = req.body

        dbInstance.create([name, address, city, state, zip, url, monthlyMortgage, rent])
        .then( houses => res.status(200).send(houses))
        .catch( err => {
            res.status(500).send('Server create error')
            console.log(err)
        })
    },

    delete(req, res, next) {
        const dbInstance = req.app.get('db')
        const { id } = req.params

        dbInstance.delete_house(id)
        .then( () => res.status(200).send('Delete success!'))
        .catch( err => {
            res.status(500).send('Sever delete error')
            console.log( err )
        })
    },

    getOne(req, res, next) {
        const dbInstance = req.app.get('db')
        const {id} = req.params

        dbInstance.get_house(id)
        .then( (house) => res.status(200).send(house))
        .catch( err => {
            res.status(500).send('Sever get one error')
            console.log( err )
        })
    }
}