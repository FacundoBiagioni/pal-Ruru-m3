import { useState } from 'react';

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    // Maneja el cambio en el campo de entrada
    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // Maneja el envío de la búsqueda
    const handleSearchSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes agregar la lógica para manejar la búsqueda con searchQuery
        console.log(`Buscando: ${searchQuery}`);
    };

    return (
        <form onSubmit={handleSearchSubmit}>
            <input
                type="text"
                value={searchQuery}
                onChange={handleInputChange}
                placeholder="Buscar..."
            />
            <button type="submit">Buscar</button>
        </form>
    );
};

export default SearchBar;
