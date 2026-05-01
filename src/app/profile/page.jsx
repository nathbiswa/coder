"use client"


import { UserProfileModal } from '@/components/UserProfileModal';
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';


const ProfilePage = () => {
    const userData = authClient.useSession();
    // console.log(userData, "userdata");
    const user = userData.data?.user;
    // console.log(user, "User");
    return (
        <div>
            <Card className='w-96 border mx-auto flex flex-col justify-center items-center mt-10
             '>
                <Avatar className='w-[70px] h-[70]'>
                    <Avatar.Image alt="user.title"
                        src={user?.image}
                        referrerPolicy="no-referrer" />
                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                </Avatar>
                <h1>{user?.name}</h1>
                <h3>{user?.email}</h3>
                <UserProfileModal></UserProfileModal>
            </Card>

        </div>
    );
};

export default ProfilePage;