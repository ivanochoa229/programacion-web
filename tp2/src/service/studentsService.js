const API_BASE = `/api/students/`;

export const findAll = async (search = '',page, pageSize) => {
    try {
      const students = await fetch(`${API_BASE}?search=${search}&page=${page}&pageSize=${pageSize}`, {
        method:'GET',
        headers: {
            'Content-Type': 'application/json', 
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

export const createStudent = async ({firstname, lastname, email, dni}) => {
    try{
        const response = await fetch(API_BASE, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json', 
              },
            body: JSON.stringify({ firstname, lastname, email, dni })
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

export const deleteStudent = async (sid) => {
  try {
      const response = await fetch(`${API_BASE}${sid}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json', // Necesario para que el backend sepa que se envía JSON
        },
      });
      if(!response){
        throw new Error('Response error');
      }
      return true;
  } catch (err) {
    console.error('Error:', err);
        throw err; 
  }
}


export const lengthStudent = async () => {
  try {
      const response = await fetch(`${API_BASE}length`,{
        method:'GET',
        headers: {
          'Content-Type': 'application/json', 
        },
      });
      if(!response){
        throw new Error('Response error');
      }
      const data = await response.json();
      return data;
  } catch (err) {
    console.error('Error:', err);
        throw err;
  }
}