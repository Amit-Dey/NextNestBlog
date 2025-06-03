"use client";
import { SessionUser } from "@/lib/session";
import { Popover } from "@radix-ui/react-popover";
import { PopoverContent, PopoverTrigger } from "./ui/popover";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  ArrowRightStartOnRectangleIcon,
  ListBulletIcon,
  PencilSquareIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";

type Props = {
  user: SessionUser;
};

const Profile = ({ user }: Props) => {
  return (
    <Popover>
      <PopoverTrigger className="focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-full">
        <Avatar className="cursor-pointer">
          <AvatarImage
            className="rounded-full w-12 h-12 object-cover border-2 border-white transition-all duration-200 hover:border-indigo-400"
            src={user.avatar || "/default-avatar.png"} // Fallback image for avatar
            alt={user.name || "User Avatar"}
          />
          <AvatarFallback className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 border-2 border-white">
            <UserIcon className="w-8 h-8" />
          </AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="w-60 p-4 rounded-xl shadow-lg bg-white border border-gray-100 z-50">
        {/* User Info Section */}
        <div className="flex items-center gap-3 pb-3 mb-3 border-b border-gray-200">
          <UserIcon className="w-5 h-5 text-indigo-500" />
          <p className="text-gray-800 font-semibold truncate">{user.name}</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-1">
          <Link
            href="/user/create-post"
            className="group flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors duration-200"
          >
            <PencilSquareIcon className="w-5 h-5 text-gray-500 group-hover:text-indigo-700 transition-colors duration-200" />
            <span className="font-medium">Create New Post</span>
          </Link>
          <Link
            href="/user/posts"
            className="group flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors duration-200"
          >
            <ListBulletIcon className="w-5 h-5 text-gray-500 group-hover:text-indigo-700 transition-colors duration-200" />
            <span className="font-medium">My Posts</span>
          </Link>
          <a
            href="/api/auth/signout"
            className="group flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors duration-200"
          >
            <ArrowRightStartOnRectangleIcon className="w-5 h-5 text-gray-500 group-hover:text-red-700 transition-colors duration-200" />
            <span className="font-medium">Sign Out</span>
          </a>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Profile;
