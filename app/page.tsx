'use client';

import React, { useState, useEffect } from 'react';

export default function Home() {
  const URL = 'https://api.itbook.store/1.0/new';
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    const cargarLibros = async () => {
      try {
        const respuesta = await fetch(URL);
        const data = await respuesta.json();
        setLibros(data.books);
      } catch (error) {
        console.error('Error al cargar los libros:', error);
      }
    };

    cargarLibros();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Título</th>
          <th>Imagen</th>
        </tr>
      </thead>
      <tbody>
        {libros.map((libro) => (
          <tr key={libro.isbn13}>
            <td>{libro.title}</td>
            <td>
              <img
                src={libro.image}
                alt={`Portada del libro: ${libro.title}`}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
