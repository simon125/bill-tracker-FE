import React from "react";
import Masonry from "react-masonry-css";
import "./masonary.css";

export const Masonry123: React.FC<{ breakpointCols: number }> = ({
  breakpointCols,
  children,
}) => {
  return (
    <Masonry
      breakpointCols={{ default: breakpointCols, 960: 1 }}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {children}
    </Masonry>
  );
};
