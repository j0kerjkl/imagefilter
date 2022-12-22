import axios from 'axios';

const SearchImages = async (term) => {
    const response = await axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=${term}&per_page=24&format=json&nojsoncallback=1`, {

        params: {
            tags: term,
            text: term
        }

    }
    );
    console.log(response.data.photos.photo)
    return response.data.photos.photo;
}

export default SearchImages;

