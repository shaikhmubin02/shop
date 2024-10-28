import Test from "@/components/Test"; 
import { currentUser } from "@clerk/nextjs/server";

const Home = async() => {
  // Get current user but don't force redirect
  const clerkUser = await currentUser();
  const email: string = clerkUser?.emailAddresses[0]?.emailAddress || '';

  return (
    <>
      <Test email={email}/>
    </>
  );
}

export default Home
