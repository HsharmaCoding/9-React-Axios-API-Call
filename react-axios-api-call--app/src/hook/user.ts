import {IUser} from '../models'
import {useEffect,useState} from 'react'
import { UserService } from '../utility'

export const UserHook=(loadUser:boolean)=>{
    const [data, setData] = useState<IUser[]>([]);
    const [loading,setLoading]=useState(false);
    const[error,setError]=useState("");

    useEffect(()=>{
        const fetchData=async()=>{
            try{
                setLoading(true);
                const result=await UserService.getUser();
                setData([...result]);
            }
            catch(error:any){
                setData([]);
                setError(error.toString())
            }
            finally{
                setLoading(false);
            }
        }

        if(loadUser){
            fetchData();
        }
    },[loadUser])

    return {data,loading,error,setData}
}