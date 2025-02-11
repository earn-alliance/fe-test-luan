import { CardGameList } from "../components/CardGameList";
import { Header } from "../components/Header";

export const Home = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Header />
      <CardGameList />
    </div>
  );
};
