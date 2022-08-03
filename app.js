const express= require('express');
const app= express();
app.use((req, res, next) => {
    req.status(200).json({
        message: 'may be it works'
    });
});
       

module.exports = app;