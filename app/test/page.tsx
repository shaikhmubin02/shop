// import UserList from "@/components/UserList";
// import { clerkClient, currentUser } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";

// export default async function UsersPage() {

//   const client = clerkClient(); 

//   let allUsers: Array<{ 
//     id: string, 
//     name: string, 
//     email: string | undefined, 
//     avatar: string | undefined, 
//     created_at: string, 
//     last_sign_in_at: string | undefined 
//   }> = [];
  
//   let offset = 0;
//   const limit = 100;

//   while (true) {
    
//     const userResponse = await client.users.getUserList({
//       limit,
//       offset,
//       orderBy: '-created_at',
//     });

//     const users = userResponse.data.map(user => ({
//       id: user.id,
//       name: `${user.firstName} ${user.lastName}`,
//       email: user.emailAddresses[0]?.emailAddress,
//       avatar: user.imageUrl,
//       created_at: new Date(user.createdAt).toISOString(),
//       last_sign_in_at: user.lastSignInAt ? new Date(user.lastSignInAt).toISOString() : undefined,
//     }));

//     allUsers = allUsers.concat(users);

//     if (users.length < limit) {
//       break;
//     }

//     offset += limit;
//   }

//   const clerkUser = await currentUser(); 
//   if (!clerkUser) redirect('/sign-in');
//   const email: string = clerkUser.emailAddresses[0]?.emailAddress || '';

//   return (
//     <UserList users={allUsers} email={email} />
//   );
// }

import Userdata from "@/components/Userdata";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function UsersPage() {

  const client = clerkClient(); 

  let allUsers: Array<{ 
    id: string, 
    name: string, 
    email: string | undefined, 
    avatar: string | undefined, 
    created_at: string,  
  }> = [];

  let allRecentUsers: Array<{ 
    id: string, 
    name: string, 
    email: string | undefined, 
    avatar: string | undefined,
    last_sign_in_at: string | undefined 
  }> = [];
  
  let offset = 0;
  const limit = 100;

  while (true) {
    
    const userResponse = await client.users.getUserList({
      limit,
      offset,
      orderBy: '-created_at',
    });

    const userResponserecent = await client.users.getUserList({
      limit,
      offset,
      orderBy: '-last_sign_in_at',
    });

    const users = userResponse.data.map(user => ({
      id: user.id,
      name: `${user.firstName} ${user.lastName}`,
      email: user.emailAddresses[0]?.emailAddress,
      avatar: user.imageUrl,
      created_at: new Date(user.createdAt).toISOString(),
    }));

    const usersrecent = userResponserecent.data.map(user => ({
      id: user.id,
      name: `${user.firstName} ${user.lastName}`,
      email: user.emailAddresses[0]?.emailAddress,
      avatar: user.imageUrl,
      last_sign_in_at: user.lastSignInAt ? new Date(user.lastSignInAt).toISOString() : undefined,
    }));

    allUsers = allUsers.concat(users);
    allRecentUsers = allRecentUsers.concat(usersrecent);

    if (users.length || usersrecent.length < limit) {
      break;
    }

    offset += limit;
  }

  const clerkUser = await currentUser(); 
  if (!clerkUser) redirect('/sign-in');
  const email: string = clerkUser.emailAddresses[0]?.emailAddress || '';

  return (
    <Userdata users={allUsers} usersrecent={allRecentUsers} email={email} />
  );
}