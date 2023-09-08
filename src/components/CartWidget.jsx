function CartWidget() {
    return (<>
        <button className="relative inline-flex items-center px-3 pt-4 pb-4 mt-3 text-base bg-white border-0 rounded-t-xl top-2 focus:outline-none hover:bg-gray-200 md:mt-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-8 fill-violet-900" viewBox="0 0 1024 1024">
                <path d="M352 831a64 64 0 1 0 0 128 64 64 0 0 0 0-128zm447 0a64 64 0 1 0 0 128 64 64 0 0 0 0-128zm64-32H343c-46 0-86-36-92-83l-54-381-31-179c-2-15-16-28-30-28H95a32 32 0 0 1 0-64h41c47 0 88 36 93 83l31 178 54 383c2 15 16 28 29 28h520a32 32 0 1 1 0 63zM383 672a32 32 0 0 1-2-64l434-32c16 0 29-13 31-27l50-288c1-11-2-23-8-30-4-5-9-7-15-7H319a32 32 0 0 1 0-64h554c24 0 47 10 63 29 19 21 27 50 24 81l-51 288c-5 45-46 82-92 82l-431 31-3 1zm0 0" />
            </svg>
            <span className="h-8 p-2 leading-none text-white bg-orange-600 rounded-3xl">8</span>
        </button>
    </>);
}

export default CartWidget;