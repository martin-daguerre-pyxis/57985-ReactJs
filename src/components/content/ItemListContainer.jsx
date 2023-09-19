const ItemListContainer = ({ children, className }) => {
    return (<>
        <div className={className + "w-full m-8 mb-12 lg:w-1/2 p-12 lg:mx-auto lg:my-16 text-xl font-medium text-center text-purple-800 rounded-2xl bg-purple-50"}>
            {children}
        </div>
    </>);
}

export default ItemListContainer;