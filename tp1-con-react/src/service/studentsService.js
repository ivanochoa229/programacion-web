const API_BASE = `/api/students/`;

export const findAll = async () => {
    try {
      const students = await fetch(API_BASE, {
        method:'GET',
        headers: {
            'Content-Type': 'application/json', // Necesario para que el backend sepa que se envía JSON
          },
      });
      if (!students.ok) {
        throw new Error('Response error');
      }
      const data = await students.json();
      return data;
    } catch (err) {
        console.error('Error:', err);
      throw err; 
    }
  };

export const createStudent = async ({name, lastname}) => {
    try{
        const response = await fetch(API_BASE, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json', // Necesario para que el backend sepa que se envía JSON
              },
            body: JSON.stringify({ name, lastname })
        });
        if (!response.ok) {
            throw new Error('Response error');
          }
          const newStudent = await response.json();
          return newStudent;
    }catch (err){
        console.error('Error:', err);
        throw err; 
    }
}