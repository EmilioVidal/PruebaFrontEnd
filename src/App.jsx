import NavBar from "./NavBar";
import Header from "./Header";
import Counter from "./Counter";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-200 px-6 py-10">
      <NavBar />
      <div className="flex-grow flex flex-col items-center justify-center w-full">
        <Header />
        <main className="flex flex-col items-center justify-center w-full">
          <Counter />
        </main>
      </div>
      <Footer />
    </div>
  );
}
