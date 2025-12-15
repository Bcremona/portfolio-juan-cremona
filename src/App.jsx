import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Inicio from './pages/Inicio';
import Proyectos from './pages/Proyectos';
import Contacto from './pages/Contacto';
import ProyectoDetalle from './pages/ProyectoDetalle';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/proyectos/:id" element={<ProyectoDetalle />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;