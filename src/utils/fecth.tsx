export const fetchData = async () => {
    try {
        const response = await fetch('/data/data.json'); // Path file di folder public
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};
