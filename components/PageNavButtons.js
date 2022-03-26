import React from "react";

function PageNavButtons({ setPage, page }) {
  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    if (page === 1) return;
    setPage(page - 1);
  };
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
