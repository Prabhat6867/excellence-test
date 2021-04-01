const mongoos = require("mongoose");
mongoos.connect("mongodb://localhost:27017/student",{useNewUrlParser: true, useUnifiedTopology:true})
.then(() => console.log("connection successfull......"))
.catch((err)=> console.log(err));
const mySchema=new mongoos.Schema({
   condidate:[{
       name: String,
       email_address: String
   }],
   test_score: [{
    first_round: {
        type: Number,
        $range:[0,10]
    },
    second_round: {
        type: Number,
        $range:[0,10]
    },
    third_round: {
        type: Number,
        $range:[0,10]
    }
}]
})
const Studentsr = new mongoos.model("Studentsr",mySchema);
const createDocument = async() =>{
    try{
        const studentPlaylist = new Studentsr({
         condidate:[{
             name:"prabhat",
             email_address:"pk@123"
         }],
         test_score:[{
          first_round:1,
          second_round:2,
          third_round:3
         }]
        })
        const student1Playlist = new Studentsr({
            condidate:[{
                name:"harsh",
                email_address:"har@123"
            }],
            test_score:[{
             first_round:3,
             second_round:4,
             third_round:8
            }]
           })
           const student2Playlist = new Studentsr({
            condidate:[{
                name:"golu",
                email_address:"golu@123"
            }],
            test_score:[{
             first_round:9,
             second_round:4,
             third_round:7
            }]
           })
      
      const result=await Studentsr.insertMany([studentPlaylist,student1Playlist,student2Playlist])
      console.log(result);
    }catch(err){
        console.log(err);
    }
}
createDocument()