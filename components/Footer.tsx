import React from "react";

function Footer() {
  return (
    <div className="absolute bottom-0 w-full">
      <div className="mx-auto text-center">
        <p>
          Built by{" "}
          <a href="https://www.masecodes.com/" target="_blank" rel="noreferrer">
            MaseCodes
          </a>{" "}
        </p>
        <p className="text-sm mx-8">
          This product uses the TMDB API but is not endorsed or certified by
          TMDB.
        </p>
      </div>
    </div>
  );
}

export default Footer;
