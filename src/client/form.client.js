
export const formFetch = async (values) => {
  return fetch(process.env.REACT_APP_API_URL, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });
};
