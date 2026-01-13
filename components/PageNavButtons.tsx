import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { pageState } from "../atoms/pageAtom";

function PageNavButtons() {
  const [page, setPage] = useRecoilState(pageState);

  const nextPage = useCallback(() => {
    setPage((prev) => prev + 1);
  }, [page]);

  const prevPage = useCallback(() => {
    if (page === 1) return;
    setPage((prev) => prev - 1);
  }, [page]);

  return (
    <div className="pageNavContainer">
      <button className="pageNavButton" onClick={() => prevPage()}>
        <h1>PREVIOUS PAGE</h1>
      </button>
      <h1 className="font-bold">{page}</h1>
      <button className="pageNavButton" onClick={() => nextPage()}>
        <h1>NEXT PAGE</h1>
      </button>
    </div>
  );
}

export default PageNavButtons;
