import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/title';
import ProductItem from '../components/ProductItem';

const Collection = () => {

  const { products,search,showSearch} = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(true);
  const [filterProducts, setFilterProducts] = useState(products || []);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
  };

  const applyFilter = () => {
    let productsCopy = products.slice();


    if(showSearch && search){
      productsCopy=productsCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase())); //filtering by search
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }

    setFilterProducts(productsCopy);
  };

  const sortProducts = ()=>{
    const fpcopy= filterProducts.slice();

    switch(sortType){
      case 'low-high':
        setFilterProducts(fpcopy.sort((a,b)=>(a.price - b.price)));
        break;
      case 'high-low':
        setFilterProducts(fpcopy.sort((a,b)=>(b.price-a.price)));  
        break;
      default:
        applyFilter();  
        break;
    }
  }

  useEffect(()=>{
    sortProducts();
  },[sortType])

  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  useEffect(() => {
    applyFilter();
  }, [category, subCategory,search,showSearch]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Options */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
          FILTERS
          <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} alt="Dropdown" />
        </p>
        
        {/* Category Filters */}
        <div className={`border border-gray-300 pl-5 py-3 my-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <label className='flex gap-2'>
              <input type="checkbox" className='w-3' value='Men' onChange={toggleCategory} />Men
            </label>
            <label className='flex gap-2'>
              <input type="checkbox" className='w-3' value='Women' onChange={toggleCategory} />Women
            </label>
            <label className='flex gap-2'>
              <input type="checkbox" className='w-3' value='Kids' onChange={toggleCategory} />Kids
            </label>
          </div>
        </div>

        {/* Subcategory Filters */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <label className='flex gap-2'>
              <input type="checkbox" className='w-3' value='Topwear' onChange={toggleSubCategory} />TopWear
            </label>
            <label className='flex gap-2'>
              <input type="checkbox" className='w-3' value='Bottomwear' onChange={toggleSubCategory} />BottomWear
            </label>
            <label className='flex gap-2'>
              <input type="checkbox" className='w-3' value='Winterwear' onChange={toggleSubCategory} />WinterWear
            </label>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1="ALL" text2="COLLECTIONS" />
          {/* Product Sort */}
          <select onChange={(e)=>setSortType(e.target.value)} name="sort" className='border border-gray-300 text-sm px-2'>
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6'>
          {filterProducts.length > 0 ? (
            filterProducts.map((item, index) => (
              <ProductItem key={index} name={item.name} id={item.id} price={item.price} image={item.image} />
            ))
          ) : (
            <p className='text-center text-gray-600'>No products match the selected filters.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
