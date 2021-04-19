import React from "react";
import ReactPlayer from "react-player/lazy";

interface ModalWithDemoProps {
  showModal: boolean;
  onCloseClick: () => void;
}

export const ModalWithDemo: React.FC<ModalWithDemoProps> = ({
  showModal,
  onCloseClick,
}) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 100,
        background: "#314150f0",
        display: "flex",
        alignItems: "center",
        transition: "all 0.6s",
        opacity: showModal ? "1" : "0.7",
        transform: showModal ? "translateY(0)" : "translateY(-100%)",
        flexDirection: "column",
      }}
    >
      <button
        style={{
          color: "#eee",
          display: "block",
          fontSize: 100,
          fontWeight: 300,
          background: "transparent",
          border: "none",
          cursor: "pointer",
          alignSelf: "flex-end",
          marginRight: "10vw",
        }}
        onClick={onCloseClick}
      >
        &times;
      </button>
      <ReactPlayer
        playing={showModal}
        url="https://www.youtube.com/watch?v=lAkuJXGldrM"
        height="70%"
        width="70%"
      />
    </div>
  );
};
