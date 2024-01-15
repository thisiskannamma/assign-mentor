const mentorRouter = require('./Routers/MentorRouter')
const studentRouter = require('./Routers/StudentRouter')

const express = require('express');
const app = express();


app.use(express.json());

const PORT = 5000;

const mongoose = require('mongoose');

mongoose.connect("mongodb://0.0.0.0:27017/MentorStudentDB",
    { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("connected to mongoDB...."))
    .catch((err) => console.error("could not connect to mongoDB...", err));


app.get('/', (req, res) => res.send(`
<div>
<p>Because my rendor app couldn't able to connect to mongoDB compass.please use this link to check details  </p>
<p>To get all mentor List - <a>http://localhost:5000/Mentors<a> </p>
<br>
<p>To get all Students List - http://localhost:5000/Students </p>
<br>
<p>To get mentor based on ID - http://localhost:5000/Mentors/get-mentor/65a4d070b0657ec3378751c5<p>
<br>
<p>To get students with no mentor - http://localhost:5000/Students/no-mentors<p>
<br>
<p>To get all students for a particular mentor - http://localhost:5000/Students/mentor-students/65a4ce5db0657ec3378751c0 </p>
<br>



`))

app.use('/Mentors', mentorRouter);
app.use('/Students', studentRouter);

app.listen(PORT, () => console.log(`Server started in the port ${PORT}`))
