import { useNavigate } from "react-router-dom";
import { PageContent } from "../../components/PageContent";
import { useForm } from 'react-hook-form';
import { createStudent } from "../../service/studentsService";

export const FormStudents = () => {
  const defaultValues = {
    inputNameValue: '',
    inputLastnameValue: ''
  }

  const {register, handleSubmit, formState:{errors}, reset} = useForm({defaultValues});
  const onSubmit = async ({inputNameValue, inputLastnameValue}) => {
    await createStudent({name:inputNameValue, lastname:inputLastnameValue});
    reset();
    navigate(-1);
  }


  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(-1);
  }
  return (
    <>
    <PageContent 
      headerTitle="Añadir Alumno"
      actions={[
        <button key='come-back' onClick={handleOnClick}>Atras</button>
      ]}
      >
      <form className='alumn-form' 
          onSubmit={ handleSubmit(onSubmit)}>
        <label htmlFor='name'>Nombre:</label>
        <input {...register('inputNameValue', {
          required:'Field name is required',
          maxLength:{
            value:10,
            message:'Name must no be bigger than 10 characters'
          }
        })} />
        <p>{errors.inputNameValue?.message}</p>
        <label htmlFor='lastname'>Apellido:</label>
        <input {...register('inputLastnameValue',{
          required:'Field lastname is required',
          maxLength:{
            value:10,
            message:'Name must no be bigger than 10 characters'
          }
        }
        )} />
        <p>{errors.inputLastnameValue?.message}</p>
        <button className='add-student-button' type='submit'>
          Agregar
        </button>
      </form>
    </PageContent>
    </>
  );
};
