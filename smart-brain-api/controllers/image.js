const handleImage = (req,res,db,bcrypt) => {
    const { id } = req.body;
    db('users')
    .where('id','=',id)
    .increment('entries',1)
    .returning('entries')
    .then(entries => { 
        res.json(entries[0].entries)
    })
    .catch(err => { res.status(400).json('Unable to count')})
    
}

module.exports = {
    handleImage: handleImage
}