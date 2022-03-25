import { Menu } from "@headlessui/react";
import React from "react";
import { useRouter } from "next/router";
import {
  FilmIcon,
  FireIcon,
  MenuIcon,
  PlayIcon,
  StarIcon,
} from "@heroicons/react/solid";

function MobileMenu() {
  const router = useRouter();
  return (
    <div>
      <Menu as="div" className="mr-5 md:hidden">
        <Menu.Button
          className="md:hidden flex justify-center items-center content-center"
          name="menu button"
        >
          <MenuIcon className="h-7 md:hidden hover:text-pink-500" />
        </Menu.Button>

        <Menu.Items className="origin-top-right absolute right-0 mr-5 mt-4 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-10">
          <div className="rounded-md">
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`flex items-center px-4 py-2 cursor-pointer ${
                    active && "bg-pink-500 text-white"
                  }`}
                  onClick={() => router.push("/latest")}
                >
                  <PlayIcon className="h-6 mr-3" />
                  LATEST
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`flex items-center px-4 py-2 cursor-pointer ${
                    active && "bg-pink-500 text-white"
                  }`}
                  onClick={() => router.push("/upcoming")}
                >
                  <FilmIcon className="h-6 mr-3" />
                  UPCOMING
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`flex items-center px-4 py-2 cursor-pointer ${
                    active && "bg-pink-500 text-white rounded-t-md"
                  }`}
                  onClick={() => router.push("/popular")}
                >
                  <FireIcon className="h-6 mr-3" />
                  POPULAR
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`flex items-center px-4 py-2 cursor-pointer ${
                    active && "bg-pink-500 text-white rounded-b-md"
                  }`}
                  onClick={() => router.push("/toprated")}
                >
                  <StarIcon className="h-6 mr-3" />
                  TOP RATED
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
}

export default MobileMenu;
