import axios from "axios";
const baseUrl = "https://api.zeejtrading.com/";

const apiUrl = {
  baseUrl: `${baseUrl}`,
  media: `${baseUrl}content`,
  signIn: `${baseUrl}auth/sign-in/`,
  signUp: `${baseUrl}auth/sign-up/`,
  FAQs: `${baseUrl}content/faq-admin/`,
  category: `${baseUrl}content/category-admin/`,
  product: `${baseUrl}content/product-admin/`,
  project: `${baseUrl}content/project-admin/`,
  projectList: `${baseUrl}content/projects/`,
  categoryList: `${baseUrl}content/categories/`,
  categoryDetails: `${baseUrl}content/category-details/`,
  sendMail: `${baseUrl}content/send-email/`,
  FAQsList: `${baseUrl}content/faqs/`,
};
export { baseUrl, apiUrl };

export function apiCallUnsecureGet(api, response, error) {
  console.log("apiCallSecureGet ", api);
  axios
    .get(api)
    .then((res) => {
      console.warn("result", res);
      const result = res.data;
      if (result.code === 200) {
        response(result);
      } else {
        error(result.msg);
      }
    })
    .catch((err) => {
      if (err.response) {
        error(err.response.data.msg);
      } else if (err.request) {
        console.log(err.request);
        error(err.request);
      } else {
        console.log("Error", err.message);
        error(`Error ${err.message}`);
      }
      console.log(err.config);
    });
}

export function apiCallSecureGet(api, response, error) {
  console.log("apiCallSecureGet ", api);
  axios
    .get(api, {
      headers: {
        Authorization: `Token ${getAccessToken()}`,
      },
    })
    .then((res) => {
      console.warn("result", res);
      const result = res.data;
      if (result.code === 200) {
        response(result);
      } else {
        error(result.msg);
      }
    })
    .catch((err) => {
      if (err.response) {
        error(err.response.data.msg);
      } else if (err.request) {
        console.log(err.request);
        error(err.request);
      } else {
        console.log("Error", err.message);
        error(`Error ${err.message}`);
      }
      console.log(err.config);
    });
}

export function apiCallPostWithForm(api, form, response, error) {
  console.log("uploadFile ", api);

  axios
    .post(api, form, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Token ${getAccessToken()}`,
      },
    })
    .then((res) => {
      console.warn("result", res);
      const result = res.data;
      if (result.code === 200) {
        response(result);
      } else {
        error(result.msg);
      }
    })
    .catch((err) => {
      if (err.response) {
        error(err.response.data.msg);
      } else if (err.request) {
        console.log(err.request);
        error(err.request);
      } else {
        console.log("Error", err.message);
        error(`Error ${err.message}`);
      }
      console.log(err.config);
    });
}

export function apiCallPutWithForm(api, form, response, error) {
  console.log("uploadFile ", api);

  axios
    .put(api, form, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Token ${getAccessToken()}`,
      },
    })
    .then((res) => {
      console.warn("result", res);
      const result = res.data;
      if (result.code === 200) {
        response(result);
      } else {
        error(result.msg);
      }
    })
    .catch((err) => {
      if (err.response) {
        error(err.response.data.msg);
      } else if (err.request) {
        console.log(err.request);
        error(err.request);
      } else {
        console.log("Error", err.message);
        error(`Error ${err.message}`);
      }
      console.log("Error", err.response);
    });
}

export function uploadFile(api, name, file, response, error) {
  console.log("uploadFile ", api);
  console.log(name, file.name);

  const formData = new FormData();
  formData.append(name, file);
  axios
    .post(api, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Token ${getAccessToken()}`,
      },
    })
    .then((res) => {
      console.warn("result", res);
      const result = res.data;
      if (result.code === 200) {
        response(result);
      } else {
        error(result.msg);
      }
    })
    .catch((err) => {
      if (err.response) {
        error(err.response.data.msg);
      } else if (err.request) {
        console.log(err.request);
        error(err.request);
      } else {
        console.log("Error", err.message);
        error(`Error ${err.message}`);
      }
      console.log(err.config);
    });
}

export function apiCallPostFormData(api, formData, response, error) {
  console.log("apiCallPostFormData ", api);

  axios
    .post(api, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Token ${getAccessToken()}`,
      },
    })
    .then((res) => {
      console.warn("result", res);
      const result = res.data;
      if (result.code === 200) {
        response(result);
      } else {
        error(result.msg);
      }
    })
    .catch((err) => {
      if (err.response) {
        error(err.response.data.msg);
      } else if (err.request) {
        console.log(err.request);
        error(err.request);
      } else {
        console.log("Error", err.message);
        error(`Error ${err.message}`);
      }
      console.log(err.config);
    });
}

export function apiCallSecureDelete(api, id, response, error) {
  const url = `${api}?id=${id}`;
  console.log("apiCallSecureDelete ", url);
  axios
    .delete(url, {
      headers: {
        Authorization: `Token ${getAccessToken()}`,
      },
    })
    .then((res) => {
      console.warn("result", res);
      const result = res.data;
      if (result.code === 200) {
        response(result);
      } else {
        error(result.msg);
      }
    })
    .catch((err) => {
      if (err.response) {
        error(err.response.data.msg);
      } else if (err.request) {
        console.log(err.request);
        error(err.request);
      } else {
        console.log("Error", err.message);
        error(`Error ${err.message}`);
      }
      console.log(err.config);
    });
}

export function apiPostUnsecure(api, data, response, error) {
  console.log("apiPostUnsecure ", api, "data ", data);

  axios
    .post(api, data)
    .then((res) => {
      console.warn("result", res);

      const result = res.data;
      if (result.code === 200) {
        response(result);
      } else {
        error(result.msg);
      }
    })
    .catch((err) => {
      if (err.response) {
        error(err.response.data.msg);
      } else if (err.request) {
        console.log(err.request);
        error(err.request);
      } else {
        console.log("Error", err.message);
        error(`Error ${err.message}`);
      }
      console.log(err.config);
    });
}

export function apiPostSecure(api, data, response, onError) {
  console.log("apiPostSecure ", api, "data ", data);

  axios
    .post(api, data, {
      headers: {
        Authorization: `Token ${getAccessToken()}`,
      },
    })
    .then((res) => {
      console.log("result", res.data);

      const result = res.data;

      if (result.code === 200) {
        response(result);
      } else {
        onError(result.msg);
      }
    })
    .catch((err) => {
      try {
        console.log("error", err.response);

        if (err.response) {
          onError(err.response.data.msg);
        } else if (err.request) {
          console.log(err.request);
          onError(err.request);
        } else {
          console.log("Error", err.message);
          onError(`Error ${err.message}`);
        }
      } catch (e) {
        console.log(e);
        onError("Something went wrong!");
      }
      console.log(err.config);
    });
}

export function apiPutSecure(api, data, response, error) {
  console.log("apiPutSecure ", api, "data ", data);

  axios
    .put(api, data, {
      headers: {
        Authorization: `Token ${getAccessToken()}`,
      },
    })
    .then((res) => {
      console.warn("result", res);

      const result = res.data;

      if (result.code === 200) {
        response(result);
      } else {
        error(result.msg);
      }
    })
    .catch((err) => {
      if (err.response) {
        error(err.response.data.msg);
      } else if (err.request) {
        console.log(err.request);
        error(err.request);
      } else {
        console.log("Error", err.message);
        error(`Error ${err.message}`);
      }
      console.log(err.config);
    });
}

export async function apiCallSecureDeleteUrl(api, response, error) {
  axios
    .delete(api, {
      headers: {
        Authorization: `Token ${getAccessToken()}`,
      },
    })
    .then((res) => {
      console.warn("result", res);
      const result = res.data;
      if (result.code === 200) {
        response(result);
      } else {
        error(result.msg);
      }
    })
    .catch((err) => {
      if (err.response) {
        error(err.response.data.msg);
      } else if (err.request) {
        console.log(err.request);
        error(err.request);
      } else {
        console.log("Error", err.message);
        error(`Error ${err.message}`);
      }
      console.log(err.config);
    });
}

export function apiDeleteSecureWithoutURL(api, data, response, onError) {
  console.log("apiPostSecure ", api, "data ", data);
  const token = getAccessToken();
  console.log("token", token);

  axios
    .delete(api, {
      headers: {
        Authorization: `Token ${token}`,
      },
      data: data,
    })
    .then((res) => {
      console.log("result", res.data);

      const result = res.data;

      if (result.code === 200) {
        response(result);
      } else {
        onError(result.msg);
      }
    })
    .catch((err) => {
      try {
        console.log("error", err.response);

        if (err.response) {
          onError(err.response.data.msg);
        } else if (err.request) {
          console.log(err.request);
          onError(err.request);
        } else {
          console.log("Error", err.message);
          onError(`Error ${err.message}`);
        }
      } catch (e) {
        console.log(e);
        onError("Something went wrong!");
      }
      console.log(err.config);
    });
}

export default apiCallUnsecureGet;
