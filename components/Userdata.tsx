'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Userdata({ users, email, usersrecent }: { users: any, email: string , usersrecent: any}) {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  useEffect(() => {
    const authorizedEmails = [
      "shaikhmubin572@gmail.com",
      "shaikhmubin5502@gmail.com",
      "thecreativesurat@gmail.com",
    ];

    if (authorizedEmails.includes(email)) {
      setIsAuthorized(true);
    } else {
      router.replace('/');
    }
  }, [email, router]);

  if (!isAuthorized) {
    return null;
  }

  // Filter users based on search term
  const filterUsers = (users: any[]) => {
    return users.filter(user => 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
  
  const filterUsersr = (usersrecent: any[]) => {
    return usersrecent.filter(user => 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredUsers = filterUsers(users);
  const filteredUsersr = filterUsersr(usersrecent);

  // Pagination logic
  const paginatedUsers = (users: any[]) => {
    const pageCount = Math.ceil(users.length / itemsPerPage);
    const paginatedData = users.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
    return { paginatedData, pageCount };
  };

  const paginatedUsersr = (usersrecent: any[]) => {
    const pageCount = Math.ceil(usersrecent.length / itemsPerPage);
    const paginatedData = usersrecent.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
    return { paginatedData, pageCount };
  };

  const usersPagination = paginatedUsers(filteredUsers);
  const usersPaginationr = paginatedUsersr(filteredUsersr);

  // Component for rendering user list
  const UserList = ({ users, title }: { users: any[], title: string }) => (
    <div className="bg-card rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <ul className="space-y-4">
        {users.map((user) => (
          <li key={user.id} className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={user.avatar} alt={`${user.name}'s profile`} />
              <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{user.name}</p>
              <p className="text-sm text-muted-foreground truncate">{user.email}</p>
            </div>
            <div className="text-sm text-muted-foreground">
              {new Date(user.created_at).toLocaleDateString('en-US', {
                  weekday: 'short',
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
              }).replace(/, /, ' ')}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  const formatDate = (dateString: any) => {
    const date = new Date(dateString);
    const options = {
      weekday: 'short',
      month: 'short',
      day: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  const UserLists = ({ usersrecent, title }: { usersrecent: any[], title: string }) => (
    <div className="bg-card rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <ul className="space-y-4">
        {usersrecent.map((user) => (
          <li key={user.id} className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={user.avatar} alt={`${user.name}'s profile`} />
              <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{user.name}</p>
              <p className="text-sm text-muted-foreground truncate">{user.email}</p>
            </div>
            <div className="text-sm text-muted-foreground">
              {user.last_sign_in_at ? formatDate(user.last_sign_in_at) : 'No sign-in data'}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div>
      <div className="container mx-auto py-10">
        <h1 className="text-2xl font-bold mb-4">User Activity</h1>
        <div className="mb-6">
          <Input
            placeholder="Search by name or email"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className="">
            <UserList users={usersPagination.paginatedData} title="Recent SignUp" />
            <div className="flex justify-between items-center mt-4">
              <div>
                Showing {Math.min(filteredUsers.length, currentPage * itemsPerPage)} of {filteredUsers.length} users
              </div>
              <div className="space-x-2">
                <Button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>
                <Button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, usersPagination.pageCount))}
                  disabled={currentPage === usersPagination.pageCount}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
          <div className="">
            <UserLists usersrecent={usersPaginationr.paginatedData} title="Recent SignIn" />
          </div>
        </div>
      </div>
    </div>
  );
}