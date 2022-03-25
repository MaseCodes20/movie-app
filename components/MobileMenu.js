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
        <Menu.Button className="menuButton" name="menu button">
          <MenuIcon className="h-7 md:hidden hover:text-pink-500" />
        </Menu.Button>

        <Menu.Items className="menuItemsContainer">
          <div className="rounded-md">
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`mobileMenuLink ${
                    active && "mobileMenuLinkActive rounded-t-md"
                  }`}
                  onClick={() => router.push("/latest")}
                >
                  <PlayIcon className="menuIcon" />
                  LATEST
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`mobileMenuLink ${
                    active && "mobileMenuLinkActive"
                  }`}
                  onClick={() => router.push("/upcoming")}
                >
                  <FilmIcon className="menuIcon" />
                  UPCOMING
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`mobileMenuLink ${
                    active && "mobileMenuLinkActive"
                  }`}
                  onClick={() => router.push("/popular")}
                >
                  <FireIcon className="menuIcon" />
                  POPULAR
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`mobileMenuLink ${
                    active && "mobileMenuLinkActive rounded-b-md"
                  }`}
                  onClick={() => router.push("/toprated")}
                >
                  <StarIcon className="menuIcon" />
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
