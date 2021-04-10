type MethodType = "POST" | "GET" | "PUT" | "DELETE";

type BodyType = {
  url: string;
  params: Object;
  method: MethodType;
};

export const protectedFetch = async (token: string, body: BodyType) => {
  const request = await fetch(body.url, {
    method: body.method,
    body: JSON.stringify(body.params),
    headers: {
      authorization: token,
      "Content-Type": "application/json",
    },
  });

  return request.json();
};

export const normalFetch = async (url: string) => {
  const request = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return request.json();
};
