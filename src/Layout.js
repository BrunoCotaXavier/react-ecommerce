// src/components/Layout.js
import Header from './screens/header/index';
import { Outlet } from 'react-router-dom';
import TabButton from './screens/tab-button';

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* Aqui é onde o conteúdo das rotas será renderizado */}
      </main>
      <TabButton />
    </>
  );
}

export default Layout;
