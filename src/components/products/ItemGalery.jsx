import { useState } from 'react';
import Carousel from 'react-simply-carousel';

function ItemGalery({ pictureUrl, images, video }) {
    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <Carousel
            updateOnItemClick
            containerProps={{
                style: {
                    width: "100%",
                    justifyContent: "space-between"
                }
            }}
            activeSlideIndex={activeSlide}
            activeSlideProps={{
                style: {
                    background: "blue"
                }
            }}
            onRequestChange={setActiveSlide}
            forwardBtnProps={{
                children: ">",
                style: {
                    width: 60,
                    height: 60,
                    minWidth: 60,
                    alignSelf: "center"
                }
            }}
            backwardBtnProps={{
                children: "<",
                style: {
                    width: 60,
                    height: 60,
                    minWidth: 60,
                    alignSelf: "center"
                }
            }}
            itemsToShow={2}
            speed={400}
        >
            {Array.from({ length: 10 }).map((item, index) => (
                <div
                    style={{
                        background: "red",
                        width: 300,
                        height: 300,
                        border: "30px solid white",
                        textAlign: "center",
                        lineHeight: "240px",
                        boxSizing: "border-box"
                    }}
                    key={index}
                >
                    {index}
                </div>
            ))}
        </Carousel>
    );
}

export default ItemGalery;