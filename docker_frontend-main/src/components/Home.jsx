import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>CRUD de Usuarios</h1>
            <ul>
                <li><Link to="/create">Crear Usuario</Link></li>
                <li><Link to="/view">Ver Todos los Usuarios</Link></li>
                <li><Link to="/find">Buscar Usuario</Link></li>
                <li><Link to="/update">Actualizar Usuario</Link></li>
                <li><Link to="/delete">Eliminar Usuario</Link></li>
            </ul>
        </div>
    );
}

export default Home;
