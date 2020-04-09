import React,{ useState, useEffect} from 'react'
import { IoIosAddCircle } from 'react-icons/io'
import api from '../../service/api'
import './style.css';


function Form() {
    const [description = '', setDescription] = useState('');


   async function HandleAdd(e){
        e.preventDefault();
        try{
            await api.post('/todos',{description})
            
            
        }catch(err){
            alert('tente preecher o campo')
        }
    }
    return (

        <div className="container">
            <div className="input-group mb-3">
                <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)} placeholder="add a task..." />
                <div className="input-group-append">
                    <button className="btn btn-secondary" onClick={HandleAdd}  type="button"><IoIosAddCircle /></button>
                </div>
              
            </div>

        </div>

    )
}

export default Form;