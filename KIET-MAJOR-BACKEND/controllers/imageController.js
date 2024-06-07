const imageModel = require("../models/imageModel");

const generateImage = async (req, res) => {
    const body = req.body;
    const searchText = body.searchText;

    let imageUrl = "";
    try{
        const res = await fetch(`https://source.unsplash.com/random/400x400/?${searchText}`);
        imageUrl  = res.url;   

        await imageModel.create({
            searchText,
            imageUrl
        });
    }
    catch(err){
        console.log(err);
    }

    res.json({
        status: 'success',
        data: {
            imageUrl: imageUrl,
        }
    })
}

module.exports = {
    generateImage
}