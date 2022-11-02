const express = require('express');
const cors = require('cors');
const path = require('path')
const app = express()
const port = process.env.PORT || 3000
require('./server/dbConnect');


const postRouter = require('./routes/post.route');
const userRouter = require('./routes/user.route');


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/api/post', postRouter)
app.use('/api/user', userRouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}
  http://127.0.0.1:${port}`)
})
