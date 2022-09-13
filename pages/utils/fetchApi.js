import axios from "axios";



export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
     headers: {
     'X-RapidAPI-Key': '7db6889287mshcb44254a619bc30p12f1c2jsn3bb3dc944e84',
     'X-RapidAPI-Host': 'bayut.p.rapidapi.com'  }
  });
    
  return data;
}

// headers: {
//     'X-RapidAPI-Key': '7db6889287mshcb44254a619bc30p12f1c2jsn3bb3dc944e84',
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//   }