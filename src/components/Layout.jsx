import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <main className="w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;