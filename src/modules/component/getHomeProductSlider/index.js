import React, { useEffect, useState } from 'react';
import ProductSlider from '../productSlider';
import { fetchSubCat, fetchProducts } from '../../../core/services'

const GetHomeProductSlider = (props) => {
    const [error, setError] = useState(false);
    const [flag, setFlag] = useState(true);
    const [category, setCategories] = useState([]);
    const [product, setProducts] = useState([]);

    let id = props.id;
    useEffect(() => {
        fetchSubCat(id, setCategories, setError);
    }, [id]);


    if (category.length > 0 && flag === true) {
        fetchProducts(category, setProducts, setError);
        setFlag(false);
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }else {
        return (
            <ProductSlider data={product} title={props.title} />
        )
    }
}

export default GetHomeProductSlider;