import React, { useEffect } from 'react';

function Test() {
  useEffect(() => {
    function testToBackEnd() {
      // Código para hacer la petición al backend
      fetch('https://gamelibraryhub-server.onrender.com/test', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(data => {
          // Procesar la respuesta del backend si es necesario
          console.log(data);
        })
        .catch(error => console.error('Error:', error));
    }

    testToBackEnd();

    const interval = setInterval(testToBackEnd, 10 * 60 * 1000);

    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
  }, []);

  return <div></div>; // Puedes renderizar lo que necesites en este componente
}

export default Test;