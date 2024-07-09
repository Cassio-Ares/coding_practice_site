import axios from "axios";
import { Languages } from './language.js'

const API = axios.create({
    baseURL: "https://emkc.org/api/v2/piston"
});

export const executeCode = async (language, sourceCode) =>{
   const response = await API.post("/execute", {
    "language": language,
    "version": Languages[language], 
    files:[
        {
            content: sourceCode
        }
    ]
   })

   return response.data
}

//https://piston.readthedocs.io/en/latest/api-v2/