import React from "react";
import { SlideContainer } from "./styled";

type SlideProps = {
  images: { src: string; alt: string }[];
};

const SlideShow = ({images}: SlideProps) => {
  return (
    <SlideContainer>
      <div>
        {images.map(img => <img key={img.alt} src={img.src} alt={img.alt} />)}
      </div>
    </SlideContainer>
  );
};

export default SlideShow;
