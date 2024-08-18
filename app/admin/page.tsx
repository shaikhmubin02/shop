import UserList from "@/components/UserList";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function UsersPage() {

  const client = clerkClient(); 

  const userResponse = await client.users.getUserList({
    // limit: 100,
    orderBy: '-created_at',
  });

  const users = userResponse.data.map(user => ({
    id: user.id,
    name: `${user.firstName} ${user.lastName}`,
    email: user.emailAddresses[0]?.emailAddress,
    avatar: user.imageUrl,
    created_at: user.createdAt,
  }));

  const clerkUser = await currentUser(); 
  if (!clerkUser) redirect('/sign-in');
  const email: string = clerkUser.emailAddresses[0]?.emailAddress || '';

  return (
    <UserList users={users} email={email} />
  );
}
