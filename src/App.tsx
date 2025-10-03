import Header from "./components/Header";
import MenuItem from "./components/MenuItem";
import { menuItems } from "./data/db";

function App() {
  console.log(menuItems);
  return (
    <>
      <Header />

      <main className=" max-w-7xl w-[90%] mx-auto py-20 grid grid-cols-1 md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menú</h2>
          <div className=" space-y-3 mt-10">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div>
          <h2>Consumo</h2>
        </div>
      </main>
    </>
  );
}

export default App;
