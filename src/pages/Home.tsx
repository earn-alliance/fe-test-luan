import { CardGameList } from "../components/CardGameList";
import { Filter } from "../components/Filter";
import { Header } from "../components/Header";

export const Home = () => {
  return (
    <div className="w-full flex flex-col justify-center gap-4">
      <Header />

      <div className="lg:grid grid-cols-[30%_70%] xl:grid-cols-[20%_70%]">
        <Filter />
        <CardGameList />
      </div>
    </div>
  );
};
