exports.getposts = (req,res)=>{
    res.json({
        posts: [
            {
                title: "First Diwali",
            },
            {
                title: "Second Diwali",
            },

        ]
    });
}