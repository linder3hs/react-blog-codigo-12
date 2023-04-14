const url = "https://6437730c894c9029e8be4944.mockapi.io/posts";

export const get = async (id = null) => {
  try {
    const finalURL = id ? `${url}/${id}` : url;
    const response = await fetch(finalURL);

    if (!response.ok) return false;

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const post = async (body) => {
  try {
    // dentro del try va a intentar hacer algo, si ese algo falla entra al catch
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) return false;

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const put = async (id, body) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) return false;

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};
