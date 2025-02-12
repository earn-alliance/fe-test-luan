import { CardGameList } from "../components/CardGameList";
import { Filter } from "../components/Filter";

import { Header } from "../components/Header";

export const Home = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center ">
      <Header />
      <div className="w-full md:flex gap-10 mt-10 px-5">
        <Filter />
        <CardGameList />
      </div>
    </div>
  );
};
