const baseUrl = "http://localhost:4000";
export const formFetch = async (values) => {
  return fetch(baseUrl, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });
};
