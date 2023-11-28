import express from "express";
import mysql from "mysql";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";
const salt = 10;

const app = express();
app.use(express.json());
app.use(cors({
     origin: ["http://localhost:3000"],
     method: ["POST", "GET"],
     credentials: true
}));
app.use(cookieParser())

const db = mysql.createConnection({
     host: "localhost",
     user: "root",
     password:"",
     database: "bookmybus"
})

const verifyUser = (req, res, next) =>{
     const token = req.cookies.token;
     if(!token){
          return res.json({Error: "You are not authorized"});
     }else {
          jwt.verify(token, "jwt-secret-key", (err, decoded)=>{
               if(err){
                    return res.json({Error: "Token is not okay"});
               }else{
                    req.name = decoded.name;
                    req.email = decoded.email;
                    next();
               }
          })
     }
}

app.get('/', verifyUser,  (req, res) =>{
     console.log(req.name);
     console.log(req.email);
     return res.json({Status: "Success", name: req.name, email: req.email});
})

app.post('/register', (req,res)=>{
     const sql = "INSERT INTO signup (`name`,`email`,`phonenumber`,`password`) VALUES (?)";
     bcrypt.hash(req.body.password.toString(), salt, (err, hash) =>{
          if(err) return res.json({Error: "Error for hashing password"});
          const values = [
               req.body.name,
               req.body.email,
               req.body.phonenumber,
               hash
          ]
          db.query(sql, [values], (err, result) => {
               if(err) return res.json({Error: "Inserting data error in server"});
               return res.json({Status: "Success"});
          })
     })
     
})

app.post('/login', (req, res) =>{
     const sql = "SELECT * FROM signup WHERE email =?";
     db.query(sql, [req.body.email], (err, data)=>{
         if (err) return res.json({Error: "Login error in server"});
         if(data.length > 0){
               bcrypt.compare(req.body.password.toString(), data[0].password, (err, response) =>{
                    if(err) return res.json({Error: "Password compare error"});
                    if(response){
                              const name = data[0].name;
                              const email = data[0].email;
                              const token = jwt.sign({name,email}, "jwt-secret-key", {expiresIn: '1d'});
                              res.cookie('token', token);
                              return res.json({Status: "Success"});
                    }else{
                         return res.json({Error: "Password not matched"});
                    }
               })
         }else {
               return res.json({Error: "No email existed"});
         }
     })
})

app.post('/busDetails', (req,res)=>{
     const sql = "INSERT INTO busdetails (`pickup`,`destination`,`price`,`datetime`) VALUES (?)";
     const values = [
          req.body.pickup,
          req.body.destination,
          req.body.price,
          req.body.datetime
     ]
     db.query(sql, [values], (err, result) => {
          if(err) return res.json({Error: "Inserting data error in server"});
          return res.json({Status: "Success"});
     })
})

app.get('/logout', (req, res) =>{
     res.clearCookie('token');
     return res.json({Status: "Success"});
})
app.listen(5000, () =>{
     console.log("Running......");
})


