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
import { useRecoilState } from "recoil";
import { pageState } from "../atoms/pageAtom";

function MobileMenu() {
  const [page, setPage] = useRecoilState(pageState);
  const router = useRouter();

  return (
    <div>
      <Menu as="div" className="mr-3 lg:hidden">
        <Menu.Button
          className="menuButton"
          name="menu button"
          aria-label="Menu button"
        >
          <MenuIcon className="h-7 lg:hidden hover:text-pink-500" />
        </Menu.Button>

        <Menu.Items className="menuItemsContainer">
          <div className="rounded-md">
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`mobileMenuLink ${
                    active && "mobileMenuLinkActive rounded-t-md"
                  }`}
                  onClick={() => {
                    router.push("/latest");
                    setPage(1);
                  }}
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
                  onClick={() => {
                    router.push("/upcoming");
                    setPage(1);
                  }}
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
                  onClick={() => {
                    router.push("/popular");
                    setPage(1);
                  }}
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
                  onClick={() => {
                    router.push("/toprated");
                    setPage(1);
                  }}
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
