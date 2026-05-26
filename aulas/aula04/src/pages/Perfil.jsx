import { useParams } from "react-router";
import { useForm } from "react-hook-form"

function Perfil() {
  const { id } = useParams();
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    } = useForm();
  
  
    const onSalvar = (data) => {
    console.log(data);
  };

  const validadores = {
    nome: {
      required: "Nome é obrigatório",
      minLenght: {
        value: 3,
        message:"Nome deve ter mais de 2 caracteres",
      }
    },
    email:{
      required: "Email é obrigatório",
    },
    nascimento: {
      validate: (value) => 
        Date.parse(`${value} 00:00:00 UTC`) <= Date() || "Data invalida"
  },
    telefone: {
      min: {value: 0, message: "Telefone é um numero"},
      pattern: {
        value: /^\(?([1-9][0-9])\)? ?(?:[9]{1})?([0-9]{4})[-. ]?([0-9]{4})$/,
        message: "telefone invalido"
      }
    }
  }




  // buscar o usuario pelo id

  return( 
    <>
  
      <h1>Perfil do Usuário {id}</h1>
      <form onSubmit={handleSubmit (onSalvar)}>
        <div>
          <label htmlFor="nome">Nome</label>
          <input 
          type="text" 
          id="nome" {...register("nome", validadores.nome)} 
          />
          {errors?.nome && <p>{errors.nome.message}</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input 
          type="email" 
          id="email"{...register("email", validadores.email)} 
          />
          {errors?.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="nascimento">Data de Nascimento</label>
          <input 
          type="date" 
          id="nascimento"{...register("nascimento", validadores.nascimento)} 
          /> 
          {errors?.nascimento && <p>{errors.nascimento.message}</p>} 
        </div>
        <div>
          <label htmlFor="telefone">Telefone</label>
          <input 
          type="tel" 
          id="telefone"{...register("telefone", validadores.telefone)}
           />
           {errors?.telefone && <p>{errors.telefone.message}</p>}
        </div>
          <button type="submit">Salvar</button>
      </form>
    </>
  );
  
}


export default Perfil;
