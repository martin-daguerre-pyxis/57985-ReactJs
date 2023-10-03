const useGetCategoryName = ({ id = 0, list = [] }) => {
  if(id) {
    const categoryData = list.find(data => data.id == id);
    const name = categoryData ? categoryData.category : null;
    return name;
  }
};

export default useGetCategoryName;