import { baseUrl } from "./constant";
import axios from "axios";



const config = {
  headers: {
    Accept: 'application/json , text/plain, /',
    'Content-type': 'multipart/form-data',
  },
};

export const ProfileData = async (id) => {
  // console.log(id)
  const api = `${baseUrl}/users/getprofile/${id}`
  const data = await axios.get(api).then((res) => {
    return res
  })
  return data


}

export const updateProfile = async (name, phone, email, city, address, date_of_birth, gender, about_us, profileImg2, ProfleId) => {
  
  console.log(typeof profileImg2);
  const formData = new FormData();
 
  formData.append('profileImg' , JSON.parse(profileImg2))

  const api = `${baseUrl}/users/update/profile/${ProfleId}`;
  console.log(`${baseUrl}/users/update/profile/${ProfleId}`)
  const data2 = await axios.put(api, formData, config).then((response) => {
    return response
  }, error => {
    return {
      status: error,
    };
  },)
  return data2
};
