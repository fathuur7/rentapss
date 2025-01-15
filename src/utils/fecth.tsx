export const fetchData = async (path : string) => {
    try {
        const response = await fetch(path); // Path file di folder public
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const dataProduct = await response.json();
        console.log(dataProduct);
        return dataProduct;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};
