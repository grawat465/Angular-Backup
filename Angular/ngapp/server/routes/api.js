const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const video= require('../models/video');
const db="mongodb://usergovind:Captain123!@ds141613.mlab.com:41613/videoplayer";
mongoose.Promise=global.Promise;

mongoose.connect(db,function(err){
    if(err){
        console.error("Error !"+ err);
    }
});

router.get('/videos',function(req,res){
    console.log("Get request for all videos");
    video.find({})
    .exec(function(err,videos)
    {
        if(err){
            console.log("Error retrievinig in videos");
        }
        else{
            res.json(videos);
        }
    });
});

router.get('/video/:id',function(req,res){
    console.log("Get request for a Single video");
    video.findById(req.params.id)
    .exec(function(err,video)
    {
        if(err){
            console.log("Error retrievinig in video");
        }
        else{
            res.json(video);
        }
    });
});
    router.post('/video',function(req,res){
        console.log('Post a video');
        var newVideo=new video();
        newVideo.title=req.body.title;
        newVideo.url=req.body.url;
        newVideo.description=req.body.description;
        newVideo.save(function(err,insertedvideo){
            if(err){
                console.log("Error saving videos")
            }
            else{
                res.json(insertedvideo);
            }
    
    });
});


router.put('/video/:id', function(req,res){
    console.log("Updating a video");
    video.findByIdAndUpdate(req.params.id,
        {
            $set: { title:req.body.title,  url:req.body.url,  description:req.body.description}
        },
        {
            new:true
        },
        function(err,updatedVideo){
            if(err){
                res.send("Error Updating video");
            }
            else{
                res.json(updatedVideo);
            }
        }

    );
    });

    router.delete('/video/:id', function(req,res)
    {
        console.log("Deleting a video");
        video.findByIdAndRemove(req.params.id, function(err,deletedVideo)
        {
            if(err)
            {
                res.send("Error Deleting the video");
            }
            else{
                res.json(deletedVideo);
            }
        });
    });



module.exports=router;