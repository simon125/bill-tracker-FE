import React from "react";
import MasonryContainer from "react-masonry-css";
import "./masonary.css";

export const Masonry: React.FC<{ breakpointCols: number }> = ({
  breakpointCols,
  children,
}) => {
  return (
    <MasonryContainer
      breakpointCols={{ default: breakpointCols, 960: 1 }}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {children}
    </MasonryContainer>
  );
};
