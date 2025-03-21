async function getTotales() {
  try {
      



      const response = await fetch('http://localhost:3000/Totales', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          }
      });

      if (!response.ok) {
          throw new Error('Error fetching users');
      }

      const users = await response.json();
      return users;
  } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
  }
}


//////////LLAMADO POST//////////

async function postTotales(usuario,email,password,Companhia,Piezas) {
  try {
   
      const userData = { 
          usuario,
          email,
          password,
          Companhia,
          Piezas
          
      
      };

      const response = await fetch("http://localhost:3000/Totales", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
      });
      
      return await response.json();

  } catch (error) {
      console.error('Error posting user:', error);
      throw error;
  }
}


//////////////LLAMADO UPDATE/////////////


async function updateTotales(usuario,email,password,Companhia,Piezas,id) 
{
  try {
   
      const userData = { 
          usuario,
          email, 
          password,
          Companhia,
          Piezas,
          id
      
      };


      const response = await fetch("http://localhost:3000/Totales/"+id, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
      });

   
      return await response.json();
  } catch (error) {
      console.error('Error update user:', error);
      throw error;
  }
}




//////////////LLAMADO DELETE/////////////


async function deleteTotales(id) {
  try {
      const response = await fetch(`http://localhost:3000/Totales/${id}`, {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json'
          }
      });

      if (!response.ok) {
          throw new Error(`Error deleting user with id ${id}`);
      }

      return { message: `User with id ${id} deleted successfully` };
  } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
  }
}

export default{ deleteTotales,getTotales,postTotales,updateTotales };