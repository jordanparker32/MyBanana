const express=require('express')
const apiRouter=express()

 app.use(express.json());
 app.use('/api/chirps', apiRouter);
 app.listen(process.env.PORT || '3000',()=>{
     console.log(`Server is running on port: ${process.env.PORT || '3000'}`);
 })