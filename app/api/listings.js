import client from './client';

const endpoint = '/listings';

// this function returns response from the api
const getListings = () => client.get(endpoint);

const postListings = ({ title, price, category, description, images, location }, onUploadProgress) => {
    // console.log('images ', JSON.stringify(images));
    const data = new FormData();
    data.append('title', title);
    data.append('price', price);
    data.append('categoryId', category.value);
    data.append('description', description);
    
    images.forEach((image, index) => {
        data.append('images', {
            name: 'image' + index,
            type: 'image/jpeg',
            uri: image
        });
    });

    if (location) 
        data.append('location', JSON.stringify(listing.location));

    return client.post(endpoint, data, {
        onUploadProgress: progress => 
            onUploadProgress(progress.loaded / progress.total)
    });
};

export default {
    getListings,
    postListings
};

// apiClient.get('/listing').then(response => {
//     if (!response.ok) {
        
//     }
// })