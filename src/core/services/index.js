export const apiEndPoint="https://rkinfoways.com:3018/";
export const fetchSubCat = async (id, setCategories, setIsLoaded, setError) => {
    let form = new FormData();
    form.append("category", id);

    const requestOptions = {
        method: "POST",
        headers: new Headers({ enctype: "multipart/form-data" }),
        body: form
    };

    fetch(apiEndPoint + "web/getAllChildCategory", requestOptions)
        .then(res => res.json())
        .then(
            (result) => {
                setCategories(result.data.map((d, i) => d.id));
            },
            (error) => {
                setError(error);
            }
        )
}

export const fetchProducts = async (category, setProducts, setIsLoaded, setError) => {
    let form = new FormData();
    form.append("isHome", 1);
    form.append("category", category);

    const requestOptions = {
        method: "POST",
        headers: new Headers({ enctype: "multipart/form-data" }),
        body: form
    };

    fetch(apiEndPoint + "web/getHomeAllProduct", requestOptions)
        .then(res => res.json())
        .then(
            (result) => {
                setProducts(result.data);
            },

            (error) => {
                setError(error);
            }
        )
}
export const fetchAllPro = async (setProducts, setIsLoaded, setError) => {
    let form = new FormData();
    form.append("is_offer", 1);

    const requestOptions = {
        method: "POST",
        headers: new Headers({ enctype: "multipart/form-data" }),
        body: form
    };

    fetch(apiEndPoint + "web/getAllProduct", requestOptions)
        .then(res => res.json())
        .then(
            (result) => {
                setProducts(result.data);
            },

            (error) => {
                setError(error);
            }
        )
}

export const fetchHomeBanners = async (setBanners, setIsLoaded, setError) => {

    const requestOptions = {
        method: "POST",
        headers: new Headers({ enctype: "multipart/form-data" }),
        body: {}
    };

    fetch(apiEndPoint + "web/getHomeBanners", requestOptions)
        .then(res => res.json())
        .then(
            (result) => {
                setBanners(result.data);
            },

            (error) => {
                setError(error);
            }
        )
}