import React from 'react'

const Banner = ({ children, picture, title, description, link, className }) => {
    return (
        <>
            <div className={className + "flex flex-col gap-6 lg:flex-row text-left"}>
                <div className="flex-grow">
                    <div style={{fontSize:'clamp(2.25rem, 1.4224rem + 4.1379vw, 3.75rem)'}} className='font-title'>{title ? title : 'Articulo sin título'}</div>
                    <div className='pt-8 pb-8 text-lg font-title line-clamp-6'>{description}</div>
                    <hr/>
                    {children}
                </div>
                <a className="block float-right" href={link} title={title}>
                    <figure className="w-full overflow-hidden rounded-3xl min-w-[150px] ">
                        <img src={picture} className="object-cover w-full" alt={title} />
                    </figure>
                </a>
            </div>
        </>
    )
}

export default Banner;