import React from 'react';
import { useForm } from 'react-hook-form';


function RequerimentoForm() {
    
    const { register, 
        handleSubmit, 
         reset,
        formState: { errors },
     } = useForm()
    
    
     const onSubmit = (data) => {
        console.log(data);
        reset();
     };
     

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Tipo de Requerimento</label>
            <input 
            {...register("tipo" ,{
                required: "Tipo é obrigatório",
            })} 
            />
            {errors.tipo && <p>{errors.tipo.message}</p>}


            <label>Descrição do Requerimento</label>
            <textarea
            {...register("descricao", {
                required: "Descrição é obrigatória",
                minLength: {
                    value: 10,
                    message: "Minímo 10 caracteres",
                },
            })}
            />
            {errors.descricao && <p>{errors.descricao.message}</p>}

            <label>Data do Requerimento</label>
            <input
            type="text"
            readOnly
            {...register("dataCriacao")} 
            
            value={new Date().toLocaleDateString("pt-BR")}
            />
            {errors.dataCriacao && <p>{errors.dataCriacao.message}</p>}

            <button type="submit">Enviar</button>
        </form>
    )
}

export default RequerimentoForm;