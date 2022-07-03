import React from "react";
import { Link } from "react-router-dom";

function Notfoundpage() {
  return (
    <div className="notfound__content">
      This page doesn't exist. Go <Link to="/">home</Link>
    </div>
  );
}

export { Notfoundpage };
