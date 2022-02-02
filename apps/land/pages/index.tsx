import type { NextPage } from "next";
import { Button } from "ui";

const Home: NextPage = () => {
  return (
    <div className="my-12 flex flex-col items-center max-w-2xl mx-auto">
      <Button />
      <h1 className="mt-6 text-3xl font-bold underline bg-slate-200 text-red-500">
        Hello world!
      </h1>
    </div>
  );
};

export default Home;
