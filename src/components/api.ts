import axios from "axios";
import { Languages } from './language';

const API = axios.create({
    baseURL: "https://emkc.org/api/v2/piston"
});


type Language = keyof typeof Languages;
 

interface ExecuteResponse {
    run: {
        stdout: string;//
        stderr: string;
        code: number;
        signal: string | null;
    };
    compile?: {
        stdout: string;//
        stderr: string;
        code: number;
    };
}

export const executeCode = async (language: Language, sourceCode: string): Promise<ExecuteResponse> => {
    const response = await API.post("/execute", {
       language: language,
       version: Languages[language],
      
       files: [
           {
               content: sourceCode
           }
       ]
   });
 
   console.log(response.data);
   return response.data as ExecuteResponse;
}


//https://piston.readthedocs.io/en/latest/api-v2/



/**
 * função para ver as linguagens disponiveis no console
 * import axios from "axios";

    const API = axios.create({
    baseURL: "https://emkc.org/api/v2/piston"
     });

     const listRuntimes = async () => {
    const response = await API.get("/runtimes");
    return response.data;
    };

    listRuntimes().then(runtimes => {
    console.log(runtimes);
    });
 */

