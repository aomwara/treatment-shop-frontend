const API_URL = process.env.REACT_APP_API_URL;

if (!API_URL) {
  throw new Error("REACT_APP_API_URL is not defined");
}

export const config = {
  apiUrl: API_URL,
};
