const { default: mongoose } = require("mongoose");


const connectdatabase = () =>{
        mongoose.connect(process.env.DB_URL).then((con)=>{
            console.log("database is connected to the host :"+con.connection.host);
        })

}

module.exports = connectdatabase;