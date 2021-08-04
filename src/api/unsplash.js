import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID BiVm4MeTi4_tBHrd9hL7-Ns27Yko82rAgOWFxJ-_CY8',
  },
});

