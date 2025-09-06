import Header from "./components/Header";
import { menuItems } from "./data/db";

function App() {
  console.log(menuItems);
  return (
    <>
      <Header />

      <main className=" max-w-7xl w-[90%] mx-auto py-20 grid grid-cols-1 md:grid-cols-2">
        <div>
          <h2>Menú</h2>
        </div>

        <div>
          <h2>Consumo</h2>
        </div>
      </main>
    </>
  );
}

export default App;
