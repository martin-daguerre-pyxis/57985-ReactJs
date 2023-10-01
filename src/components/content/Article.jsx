import React from 'react';

const Article = ({ children, picture, pictureClass, title, description, link, className }) => {
    return (
        <div className={className + " flex flex-col items-center justify-center px-5 py-6 mb-6 sm:mb-16 sm:py-20 md:flex-row container w-full mx-auto text-xl font-medium text-center text-purple-800 rounded-bl-[76rem] rounded-br-full bg-purple-50"}>
            <div className={"items-center md:flex-row flex flex-col gap-16 ml-0 sm:ml-16 lg:ml-32 lg:flex-row text-center sm:text-left"}>
                <div className="flex-grow">
                    <div style={{ fontSize: 'clamp(2.25rem, 1.4224rem + 4.1379vw, 3.75rem)' }}
                        className='leading-none font-title'>{title ? title : 'Articulo sin título'}</div>
                    <div className='pt-4 pb-2 text-lg font-title line-clamp-6'>{description}</div>
                    {children}
                </div>
                <a className="inline-block text-center sm:float-right" href={link} title={title}>
                    <figure className={pictureClass + " mx-auto overflow-hidden w-60 sm:w-96 rounded-3xl"}>
                        <img src={picture} className="object-cover w-full" alt={title} />
                    </figure>
                </a>
            </div>
        </div>
    )
}

export default Article;