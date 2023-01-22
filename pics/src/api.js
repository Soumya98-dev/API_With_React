import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID kvdXqnzSLcog8O6bpixS8xtg5CANPjB6pbGacr2UTG8'
        },
        params: {
            query: term
        }
    });
    return response.data.results;
};

export default searchImages;