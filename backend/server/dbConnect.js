const mongoose = require('mongoose');
mongoose.connect(
    'mongodb://localhost:27017/kct-api',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err)=>{
        if
        (!err)console.log("MongoDB connected");
        else
        console.log("MongoDB connexion error: " + err);
    }
);
