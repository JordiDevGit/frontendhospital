import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Create from '../pages/Create.jsx';
import Delete from '../pages/Delete.jsx';
import Read from '../pages/Read.jsx';
import Update from '../pages/Update.jsx';
import Layout from '../components/layout/Layout.jsx';

const Router = () => (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/create" element={<Create />} />
                <Route path="/delete" element={<Delete />} />
                <Route path="/read" element={<Read />} />
                <Route path="/update" element={<Update />} />
            </Routes>
        </Layout>
    </BrowserRouter>
);

export default Router;