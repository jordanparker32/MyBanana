const mysql=require('mysql');

var connection = mysql.createPool({
    connectionLimit:10,
    host: 'localhost',
    user: 'root',
    password: 'aadityakharel',
    database: 'mybanana',
    port: 3000
  });
  
  let mybanana={};
  mybanana.all=()=>{
    return new Promise ((resolve,reject)=>{
        pool.query(`SELECT * FROM user`,(err,results)=>{
            if (err){
                return reject(err);
            }
            return resolve(results);
        })
    }) 
  };


 mybanana.one=(id)=>{
    return new Promise ((resolve,reject)=>{
        pool.query(`SELECT * FROM user WHERE id=?`,[id],(err,results)=>{
            if (err){
                return reject(err);
            }
            return resolve(results[0]);
        })
    }) 
 };
  module.exports=mybanana;