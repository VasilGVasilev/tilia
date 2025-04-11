import React from "react";

import ImageGallery from "react-image-gallery";

const BuildingProcess = ({ images }) => {
    return (
        <div className="w-full h-full bg-black pt-1">
                <ImageGallery items={images} lazyLoad={true} />
        </div>
    );
};

export default BuildingProcess;
