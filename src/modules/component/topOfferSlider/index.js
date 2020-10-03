import React, { useEffect, useState } from 'react';
import ProductSlider from '../productSlider';
import { fetchAllPro } from '../../../core/services'



const TopOfferSlider = (props) => {
    const [error, setError] = useState(false);
    const [product, setProducts] = useState([]);

    useEffect(() => {
        fetchAllPro(setProducts, setIsLoaded, setError);
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    }else {
        return (
            <ProductSlider data={product} title="Top Offers" />
        )
    }
}

export default TopOfferSlider;