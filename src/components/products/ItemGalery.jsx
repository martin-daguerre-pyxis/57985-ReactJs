import { useState } from 'react';
import Carousel from 'react-simply-carousel';
import publicUrl from '../../utils';

function ItemGalery({ thumbnails }) {
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
                children: <><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                <path fill="#16C4AF" d="M512 930a419 419 0 1 1 1-837 419 419 0 0 1-1 837z"/>
                <path fill="#DCFFFA" d="M444 690c-5 0-10-2-15-7-8-8-8-21 0-29l157-157c9-9 22-9 30 0 8 8 8 21 0 30L459 683c-4 5-10 7-15 7z"/>
                <path fill="#DCFFFA" d="M601 533c-5 0-11-2-15-6L429 370c-8-8-8-22 0-30 9-8 22-8 30 0l157 157c8 8 8 21 0 30-5 4-10 6-15 6z"/>
              </svg></>,
                className: "absolute text-white font-bold text-3xl w-20 h-full z-10 top-0 right-3 text-center justify-center"
            }}
            backwardBtnProps={{
                children: <><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                <path d="M512 930C455.318 932.703 398.678 923.864 345.514 904.019C292.351 884.174 243.773 853.737 202.726 814.554C161.679 775.371 129.019 728.259 106.727 676.075C84.4349 623.89 72.9752 567.721 73.043 510.975C73.1108 454.229 84.7047 398.087 107.121 345.956C129.538 293.825 162.311 246.791 203.451 207.706C244.591 168.621 293.242 138.301 346.453 118.583C399.663 98.8653 456.325 90.1617 513 93C620.449 98.3811 721.712 144.887 795.812 222.884C869.912 300.881 911.171 404.392 911.042 511.976C910.914 619.56 869.408 722.973 795.122 800.792C720.835 878.612 619.462 924.876 512 930Z" fill="#16C4AF"/>
                <path d="M585 654L443 512L585 370C593 362 593 349 585 341C580 336 575 334 570 334C565 334 559 336 555 341L398 497C390 506 390 519 398 527C398.58 527.653 399.187 528.259 399.817 528.817L555 684C563 692 576 692 585 684C593 676 593 662 585 654Z" fill="#DCFFFA"/>
                </svg>
                </>,
                className: "absolute text-white font-bold text-3xl w-20 h-full z-10 top-0 -left-9 text-center justify-center"
            }}
            itemsToShow={1}
            speed={400}
        >
            {/* <div className='w-full sm:w-[600px] pointer-events-none'>
                <img src={`${publicUrl}products/${thumbnails}`} alt="" className='object-cover w-full sm:w-[600px] aspect-square' />
            </div> */}
            {thumbnails.map((item, index) => (
                <div className='w-full sm:w-[600px] pointer-events-none' key={index}>
                    <img src={`${publicUrl}products/${item}`} alt="" className='object-cover w-full sm:w-[600px] aspect-square' />
                </div>
            ))}
            {/* {video ? <>
                <div className='w-full sm:w-[600px] pointer-events-none'>
                <video src={`${publicUrl}video/${video}`} className='object-cover w-full sm:w-[600px] aspect-square'></video>
            </div>
            </>: null} */}
        </Carousel>
    );
}

export default ItemGalery;