import { useState } from 'react';
import Carousel from 'react-simply-carousel';
import publicUrl from '../../utils';

function ItemGalery({ pictureUrl, images, video }) {
    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <Carousel className="relative w-full aspect-square"
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
                    border: "0 none"
                }
            }}
            onRequestChange={setActiveSlide}
            forwardBtnProps={{
                children: ">",
                className: "absolute text-white font-bold text-3xl w-20 h-full z-10 top-0 right-0 bg-black/10 text-center justify-center"
            }}
            backwardBtnProps={{
                children: "<",
                className: "absolute text-white font-bold text-3xl w-20 h-full z-10 top-0 bg-black/10 text-center justify-center"
            }}
            itemsToShow={1}
            speed={400}
        >
            <div className='w-full sm:w-[600px] pointer-events-none'>
                <img src={`${publicUrl}products/${pictureUrl}`} alt="" className='object-cover w-full sm:w-[600px] aspect-square' />
            </div>
            {images.map((item, index) => (
                <div className='w-full sm:w-[600px] pointer-events-none' key={index}>
                    <img src={`${publicUrl}products/${item}`} alt="" className='object-cover w-full sm:w-[600px] aspect-square' />
                </div>
            ))}
            {video ? <>
                <div className='w-full sm:w-[600px] pointer-events-none'>
                <video src={`${publicUrl}video/${video}`} className='object-cover w-full sm:w-[600px] aspect-square'></video>
            </div>
            </>: null}
        </Carousel>
    );
}

export default ItemGalery;