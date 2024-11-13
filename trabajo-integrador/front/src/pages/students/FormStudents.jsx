import { useNavigate } from 'react-router-dom';
import { PageContent } from '../../components/PageContent';
import { useForm } from 'react-hook-form';
import { createStudent } from '../../service/studentsService';

export const FormStudents = () => {
  const defaultValues = {
    inputFirstnameValue: '',
    inputLastnameValue: '',
    inputDniValue: '',
    inputEmailValue: '',
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues });
  const onSubmit = async ({
    inputFirstnameValue,
    inputLastnameValue,
    inputDniValue,
    inputEmailValue,
  }) => {
    try {
      await createStudent({
        firstname: inputFirstnameValue,
        lastname: inputLastnameValue,
        email: inputEmailValue,
        dni: inputDniValue,
      });
      window.alert('Estudiante Agregado');
      reset();
      navigate(-1);
    } catch (err) {
      console.error('Error al agregar el estudiante:', err);
      window.alert(
        'El estudiante con este correo electrónico o DNI ya existe.'
      );
    }
  };

  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(-1);
  };
  return (
    <>
      <PageContent
        headerTitle='Añadir Alumno'
        actions={[
          <button
            key='come-back'
            onClick={handleOnClick}
            className='back-button'
          >
            Atras
          </button>,
        ]}
      >
        <div className='card'>
          <form className='alumn-form' onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor='inputName'>Nombre:</label>
            <div className='container-input-error'>
              <input
                {...register('inputFirstnameValue', {
                  required: 'El campo nombre es requerido',
                  maxLength: {
                    value: 100,
                    message: 'El nombre no puede ser mayor a 100 caractéres',
                  },
                })}
                id='inputName'
              />
              <p className='p-error'>{errors.inputFirstnameValue?.message}</p>
            </div>

            <label htmlFor='inputLastname'>Apellido:</label>
            <div className='container-input-error'>
              <input
                {...register('inputLastnameValue', {
                  required: 'El campo apellido es requerido',
                  maxLength: {
                    value: 100,
                    message: 'El apellido no puede ser mayor a 100 caractéres',
                  },
                })}
                id='inputLastname'
              />
              <p className='p-error'>{errors.inputLastnameValue?.message}</p>
            </div>

            <label htmlFor='inputDni'>DNI:</label>
            <div className='container-input-error'>
              <input
                {...register('inputDniValue', {
                  required: 'El campo dni es requerido',
                  minLength: {
                    value: 1,
                    message: 'El dni tiene que tener al menos longitud 1',
                  },
                  maxLength: {
                    value: 10,
                    message: 'El dni no puede tener longitud mayor a 10',
                  },
                  pattern:{
                    value: /^[0-9]{1,10}$/,
                    message: 'Por favor, introduzca un dni válido.'
                  }
                })}
                id='inputDni'
              />
              <p className='p-error'>{errors.inputDniValue?.message}</p>
            </div>

            <label htmlFor='inputEmail'>Email:</label>
            <div className='container-input-error'>
              <input
                id='inputEmail'
                {...register('inputEmailValue', {
                  required: 'El campo email es requerido',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Por favor ingrese una dirección válida',
                  },
                  maxLength: {
                    value: 100,
                    message: 'El email no puede ser mayor a 100 caractéres',
                  },
                })}
              />
              <p className='p-error'>{errors.inputEmailValue?.message}</p>
            </div>

            <button className='add-button form-button' type='submit'>
              Agregar
            </button>
          </form>
        </div>
      </PageContent>
    </>
  );
};
