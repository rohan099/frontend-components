import type { NextPage } from "next";
import { Button } from "ui";

const Home: NextPage = () => {
  console.log("process.env", process.env.NEXT_PUBLIC_API_URL);

  return (
    <div className="my-12 flex flex-col items-center max-w-2xl mx-auto">
      <Button />
      <h1 className="my-6 text-3xl font-bold underline bg-slate-200 text-red-500">
        Hello world! Welcome to land.
      </h1>
      <pre> {process.env.NEXT_PUBLIC_API_URL}</pre>
    </div>
  );
};

export default Home;
