const getUser = (req, res) => {
    res.status(501);
    res.json({
        status:'fail',
        message:'Route is not yet implemented',
    });

}

const postUser = (req, res) => {
    res.status(501);
    res.json({
        status:'fail',
        message:'Route is not yet implemented',
    });

}

const putUser= (req, res) => {
    res.status(501);
    res.json({
        status:'fail',
        message:'Route is not yet implemented',
    });

}

const delUser = (req, res) => {
    res.status(501);
    res.json({
        status:'fail',
        message:'Route is not yet implemented',
    }
    )};
const editUser = async (req, res) => {
        res.status(501);
        res.json({
            status:'fail',
            message:'Route is not yet implemented',
        });
    
    }

module.exports={
    getUser,
    postUser,
    putUser,
    delUser,
    editUser
}