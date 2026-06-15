import React from 'react';
import { useForm } from 'react-hook-form';

function RequerimentoForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Novo Requerimento
        </h2>

        <div className="mb-4">
          <label className="block font-medium mb-2">
            Tipo de Requerimento
          </label>
          <input
            className="w-full border rounded-md p-2"
            {...register('tipo', {
              required: 'Tipo é obrigatório',
            })}
          />
          {errors.tipo && (
            <p className="text-red-500 text-sm mt-1">
              {errors.tipo.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2">
            Descrição do Requerimento
          </label>
          <textarea
            className="w-full border rounded-md p-2 h-32"
            {...register('descricao', {
              required: 'Descrição é obrigatória',
              minLength: {
                value: 10,
                message: 'Mínimo 10 caracteres',
              },
            })}
          />
          {errors.descricao && (
            <p className="text-red-500 text-sm mt-1">
              {errors.descricao.message}
            </p>
          )}
        </div>

        <div className="mb-6">
          <label className="block font-medium mb-2">
            Data do Requerimento
          </label>
          <input
            type="text"
            readOnly
            value={new Date().toLocaleDateString('pt-BR')}
            className="w-full border rounded-md p-2 bg-gray-100"
            {...register('dataCriacao')}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default RequerimentoForm;