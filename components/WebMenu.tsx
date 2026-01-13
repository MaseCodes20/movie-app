import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { pageState } from "../atoms/pageAtom";

function WebMenu() {
  const [page, setPage] = useRecoilState(pageState);
  const router = useRouter();
  return (
    <nav className="webMenuContainer">
      <button
        onClick={() => {
          router.push("/latest");
          setPage(1);
        }}
        className={`webMenuItems ${page === 1 ? "font-bold" : ""}`}
        aria-label="Latest page button"
      >
        Latest
      </button>
      <button
        onClick={() => {
          router.push("/upcoming");
          setPage(2);
        }}
        className={`webMenuItems ${page === 2 ? "font-bold" : ""}`}
        aria-label="Upcoming page button"
      >
        Upcoming
      </button>
      <button
        onClick={() => {
          router.push("/popular");
          setPage(3);
        }}
        className={`webMenuItems ${page === 3 ? "font-bold" : ""}`}
        aria-label="Popular page button"
      >
        popular
      </button>
      <button
        onClick={() => {
          router.push("/toprated");
          setPage(4);
        }}
        className={`webMenuItems ${page === 4 ? "font-bold" : ""}`}
        aria-label="Toprated page button"
      >
        Top rated
      </button>
    </nav>
  );
}

export default WebMenu;
