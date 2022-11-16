import { ApiURL } from "./ApiURL";

export const SendOtp = async (email) => {
  return await fetch(`${ApiURL}/send-otp`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      return res.status;
    });
};

export const VerifyOTP = async (otp, email) => {
  return await fetch(`${ApiURL}/verify-otp`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      otp: otp,
      email: email,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      return res.status;
    });
};

export const ResendOTP = async (email) => {
  return await fetch(`${ApiURL}/send-otp`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    });
};

export const Logout = async () => {
  return await fetch(`${ApiURL}/logout`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      return res.status;
    });
};

export const CreateTemplate = async (addtemplate) => {
  return await fetch(`${ApiURL}/template-add`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
    body: JSON.stringify({
      workspace_id: 1,
      title: addtemplate,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      return res.status;
    });
};

export const FilterTemplate = async (filtertemplate) => {
  return await fetch(`${ApiURL}/template-search/${filtertemplate}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
  })
    .then((res) => res.json())
    .then((res) => {
      return res.status;
    });
};

export const ArchiveTemplate = async () => {
  return await fetch(`${ApiURL}/template-archive/42`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
  })
    .then((res) => res.json())
    .then((res) => {
      return res.status;
    });
};
