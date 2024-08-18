import Test from "@/components/Test"; 
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

const Home = async() => {

  const clerkUser = await currentUser();
  if(!clerkUser) redirect('/sign-in');
  const email: string = clerkUser.emailAddresses[0]?.emailAddress || '';

  console.log(email);

  return (
    <>
      <Test email={email}/>
    </>
  );
}

export default Home
