import { useState } from "react";
import "./MyForm.css";

const MyForm = ({userName, userEmail}) => {

    // 3 - gerenciamento de dados
    const [name,setName] = useState(userName);
    const [email,setEmail] = useState(userEmail);

    const [bio, setBio] = useState("");   
    const [role, setRole]=useState("")

    const handleName = (e) =>{
        setName(e.target.value);
    }

    // 5- envio de form
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(name,email, bio,role)
        //validação
        //envio

    //6-limpando os forms
    setEmail("")
    setName("")
    setBio("")
    setRole("")
    }
    
   

    console.log(name, email, bio, role);

 

  return (
    <div>
        {/*1-criação de form */}
        {/*5-Envio do forms */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome</label>
                <input 
                type="text" 
                name="name" 
                placeholder="Digite o seu nome" 
                onChange={handleName}
                /*6-controlled de input */
                value={name || ""}/>
            </div>
            {/*2-label envolvendo input */}
            <label >
                <span>Email:</span>
                <input type="text"
                 name="email"
                  placeholder="Digite seu email"
                  /*4-Simplificando o gerenciamento de dados */
                   onChange={(e)=>setEmail(e.target.value)}
                   value={email || ""} />
            </label>
            {/*8-textarea */}
            <label >Bio:
            <textarea name="bio"
             placeholder="descrição de bio"
            onChange={(e)=>setBio(e.target.value)}
            value={bio}
            ></textarea>
            </label>
            <label htmlFor="">
                <span>Função no sistema</span>
                <select name="role" onChange={(e)=>setRole(e.target.value)}
                    value={role}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Admin</option>
                </select>
            </label>
            <input type="submit"  value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm