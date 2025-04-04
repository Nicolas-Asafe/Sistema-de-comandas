import express from 'express'
import handler from './routers.js';

const App = express();
App.use(express.json())
App.use(handler)

App.listen(3000, () => {
    console.log("https://localhost:3000")
})


