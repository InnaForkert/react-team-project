import axios from 'axios';

const fetchCurrency = async () => {
  try {
    const response = await axios.get(
      'https://ewallet-api.onrender.com/api/currency?type=cash'
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default fetchCurrency;
