import { useState } from 'react';

const DialogDefault = ({ model, item, close }) => {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(!open);

  return (
    <>{open ? <div>
      <div onClick={handleOpen} className='fixed inset-0 top-0 bottom-0 left-0 right-0 z-40 w-screen h-screen bg-white/50'></div>
      <div className='fixed inset-0 top-0 bottom-0 left-0 right-0 z-50 w-screen h-screen'>
        <section className="absolute z-50 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl left-1/4 top-1/4 md:grid md:grid-cols-3">
          <div onClick={handleOpen} className='absolute w-6 h-6 text-3xl font-light cursor-pointer close right-2'>x</div>
          <img
            alt="Trainer"
            src="https://images.unsplash.com/photo-1611510338559-2f463335092c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
            className="object-cover w-full h-32 md:h-full md:max-h-96"
          />

          <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
            <p className="text-sm font-semibold tracking-widest uppercase">
              Run with the pack
            </p>

            <h2 className="mt-6 font-black uppercase">
              <span className="text-4xl font-black sm:text-5xl lg:text-6xl">
                Get 20% off
              </span>

              <span className="block mt-2 text-sm">On your next order over $50</span>
            </h2>

            <a href="/" className="inline-block w-full py-4 mt-8 text-sm font-bold tracking-widest text-white uppercase bg-black">
              Get Discount
            </a>

            <p className="mt-8 text-xs font-medium text-gray-400 uppercase">
              Offer valid until 24th March, 2021 *
            </p>
          </div>
        </section>
      </div></div>
      : null}
    </>
  );
}
export default DialogDefault;