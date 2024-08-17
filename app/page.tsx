import Test from "@/components/Test"; 
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

const Home = async() => {

  const clerkUser = await currentUser();
  if(!clerkUser) redirect('/sign-in');

  return (
    <>
      <Test />
    </>
  );
}

export default Home
