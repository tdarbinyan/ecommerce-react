import axios from 'axios';

const DataComponent = () => {
  const newItem = {
    size: 'Medium',
    name: 'Example Item',
    price: 10.99,
    image: 'example.jpg',
    tag: 'new',
  };
  
  try {
    const response = axios.post('http://localhost:8080/api/items/add', newItem);
    console.log('Item sent successfully:', response.data);
  } catch (error) {
    console.error('Error sending item:', error);
  }
};

export default DataComponent;
