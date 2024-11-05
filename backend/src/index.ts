import express,{Request,Response} from 'express'
import cors from 'cors'
import 'dotenv/config'
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URL as string)

const app = express();
const PORT = process.env.PORT || 7000;
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());

app.get('/api/test', async(req: Request, res: Response) =>{
    res.json({message: 'helo'})
})

app.listen(PORT,()=>{
    console.log(`running on ${PORT}`)
})