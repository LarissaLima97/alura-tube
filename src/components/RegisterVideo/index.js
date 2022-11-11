import React from "react";
import { StyledRegisterVideo } from "./styles";

//Custom Hook
function useForm(propsForm){
    const [values, setValues] = React.useState(propsForm.initialValues); 
    return{
        values,
        handleChange: (e) =>{
            const value = e.target.value;
            const name = e.target.name
            setValues({
                ...values,
                [name]: value,
            });
        },
        clearForm() {
            setValues({});
        }
    };
}

export default function RegisterVideo() {
    const formRegister = useForm({
        initialValues: {titulo: "Frost punk", url: "https://youtube..."}});
    const [formVisible, setFormVisible]= React.useState(false); 
    return(
        <StyledRegisterVideo>
            <button type="button" className="add-video" onClick={() => setFormVisible(true)}>
                +
            </button>
            {/* Costante uso de ternário e operadores de Curto-circuito */}
            {formVisible ? (
                 <form onSubmit={(e) => {
                    e.preventDefault();
                    setFormVisible(false);
                    formRegister.clearForm();
                 }}>
                    <div>
                        <button className="close-modal" onClick={() => setFormVisible(false)}>
                            X
                        </button>
                    <input 
                        placeholder="Título do vídeo" 
                        name="titulo"
                        value={formRegister.values.titulo} 
                        onChange={formRegister.handleChange}
                    />
                    <input 
                        placeholder="URL" 
                        name="url"
                        value={formRegister.url} 
                        onChange={formRegister.handleChange}/>
                    <button type="submit">
                        Cadastrar
                    </button>
                    </div>
                 </form>
            )
        : false}
         </StyledRegisterVideo>
    )
}