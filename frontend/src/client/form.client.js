const baseUrl = "https://groupapi39.herokuapp.com";
export const formFetch = async (values) => {
  return fetch(baseUrl, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });
};
