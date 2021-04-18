type MethodType = "POST" | "GET" | "PUT" | "DELETE";
type BodyType = {
  url: string;
  params: Object;
  method: MethodType;
};

const baseURL = "http://localhost:3000/api";

export const fetcher = async (token: string, body: BodyType) => {
  const request = await fetch(baseURL + body.url, {
    method: body.method,
    body: JSON.stringify(body.params),
    headers: {
      authorization: token,
      "Content-Type": "application/json",
    },
  });

  return request.json();
};

export const simpleFetcher = async (url: string) => {
  const request = await fetch(baseURL + url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return request.json();
};
