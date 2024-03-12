const express = require('express');
const cors = require('cors');
// import routers 
const usersRouter = require('./routers/users');
const menuRouter = require('./routers/menu');
const programsRouter = require('./routers/programs');

const app = express()
const port = 3000

app.use(express.json());
app.use(cors())

app.use('/users', usersRouter);
app.use('/menu', menuRouter);
app.use('/programs', programsRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})