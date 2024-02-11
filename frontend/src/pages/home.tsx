import Category from "../component/category.tsx";
import SearchBar from "../component/searchbar.tsx";

function Home() {
  return (
    <>
      <div className="p-5 relative">
        <SearchBar />
      </div>
      <div className="overflow-y-hidden overflow-x-scroll no-scrollbar flex items-center gap-5 py-6 pl-5">
        <img src="./src/assets/banner1.svg" />
        <img src="./src/assets/banner1.svg" />
        <img src="./src/assets/banner1.svg" />
        <div className="w-5"></div>
      </div>
      <Category />
    </>
  );
}

export default Home;
