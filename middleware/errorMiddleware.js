const errorMiddleware = (error,req,res,next)=>{
    const status = req.statusCode ? res.statusCode : 500;
    res.status(status);
    res.json({
        message:error.message
    })

}

module.exports = {errorMiddleware};