import axios from "axios";

export const createClientByInvitation = async ({
  email,
  fullName,
  address,
  gender,
  link,
}) => {
  console.log("values en services", email, fullName, address, gender, link);
  const newClient = await axios.post(
    `http://localhost:3001/register/invite/${link}`,
    {
      email,
      fullName,
      address,
      gender,
    }
  );
  console.log("newClient", newClient);
  return newClient.data;
};
