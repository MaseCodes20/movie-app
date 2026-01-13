import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
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
  const [_, setPage] = useRecoilState(pageState);
  const router = useRouter();

  return (
    <div>
      <Menu as="div" className="mr-3 lg:hidden">
        <MenuButton
          className="menuButton"
          name="menu button"
          aria-label="Menu button"
        >
          <MenuIcon className="h-7 lg:hidden hover:text-pink-500" />
        </MenuButton>

        <MenuItems className="menuItemsContainer">
          <div className="rounded-md">
            <MenuItem>
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
            </MenuItem>
            <MenuItem>
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
            </MenuItem>
            <MenuItem>
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
            </MenuItem>
            <MenuItem>
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
            </MenuItem>
          </div>
        </MenuItems>
      </Menu>
    </div>
  );
}

export default MobileMenu;
