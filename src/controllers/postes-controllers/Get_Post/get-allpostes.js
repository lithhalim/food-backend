const postes_model=require("../../../model/postes-model/post-model");
const comment_model=require("../../../model/postes-model/post_comment");
const Image_model=require("../../../model/postes-model/post_Images");

module.exports=async(req,res)=>{
    const data=await postes_model.findAll({
        include:{model:comment_model,model:Image_model},
        where:{
            popularity:req.params.data
        }
    })
    res.json(data)
}