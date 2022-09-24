import express, { Application, Request, Response } from 'express'
import * as dotenv from 'dotenv'
import morgan from 'morgan'
dotenv.config()
const PORT = process.env.PORT
const app: Application = express()

app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to my API')
})

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})

export default app
