import axios from "axios";

const fetchCurrency = async () => {
  try {
    const response = await axios.get(
      "https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11"
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export default fetchCurrency;