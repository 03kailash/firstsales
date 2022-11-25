import { ApiURL } from "./ApiURL";
import axios from "axios";
import {
  CreateTempDataRequest,
  CreateTempDataSuccess,
} from "./Redux/Actions/CreateTemplateAction";
import { store } from "../src/Redux/Store";

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

export const Forgotpassword = async (email) => {
  return await fetch(`${ApiURL}/forgot-password`, {
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
      return res;
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

export const Login = async (email, password) => {
  return await fetch(`${ApiURL}/login`, {
    method: "POST",

    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
};

export const ProfileUpdate = async (
  firstname,
  lastname,
  birthdate,
  gender,
  timezonevalue
) => {
  return await fetch(`${ApiURL}/profile-update`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
    body: JSON.stringify({
      id: localStorage.getItem("Workspace_id"),
      first_name: firstname,
      last_name: lastname,
      dob: birthdate,
      gender: gender,
      timezone: timezonevalue,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      return res.status;
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
      workspace_id: localStorage.getItem("Workspace_id"),
      title: addtemplate,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
};

export const SelectTemplate = async (id) => {
  return await fetch(`${ApiURL}/template-select/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
    body: JSON.stringify({
      workspace_id: localStorage.getItem("Workspace_id"),
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
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
    body: JSON.stringify({
      workspace_id: localStorage.getItem("Workspace_id"),
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
};

export const FilterArchiveTemplate = async (filtertemplate) => {
  return await fetch(`${ApiURL}/template-archive-search/${filtertemplate}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
    body: JSON.stringify({
      workspace_id: localStorage.getItem("Workspace_id"),
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
};

export const ArchiveTemplate = async () => {
  return await fetch(
    `${ApiURL}/template-archive/${localStorage.getItem("Template_id")}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    }
  )
    .then((res) => res.json())
    .then((res) => {
      return res.status;
    });
};

export const RestoreArchiveTemplate = async (id) => {
  return await fetch(`${ApiURL}/template-archive-restore/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
    body: JSON.stringify({
      workspace_id: localStorage.getItem("Workspace_id"),
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      return res.status;
    });
};

export const TemplateUpdate = async () => {
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
      token: localStorage.getItem("token"),
    },
  };
  const formData = new FormData();
  formData.append("title", "somil");
  formData.append("template_subject", "s");
  formData.append("template_body", "df");
  formData.append("template_signature", "ds");
  return axios
    .post(`${ApiURL}/template-update`, formData, config)
    .then((res) => {
      return res;
    });
};

export const CreateSubject = async (addSubject) => {
  return await fetch(`${ApiURL}/subject-add`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
    body: JSON.stringify({
      workspace_id: localStorage.getItem("Workspace_id"),
      title: addSubject,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
};

export const ArchiveSubject = async () => {
  return await fetch(`${ApiURL}/subject-archive/3`, {
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

export const FilterSubject = async (filterSubject) => {
  return await fetch(`${ApiURL}/subject-search/${filterSubject}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
    body: JSON.stringify({
      workspace_id: localStorage.getItem("Workspace_id"),
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
};

export const FilterArchiveSubject = async (filterSubject) => {
  return await fetch(`${ApiURL}/subject-archive-search/${filterSubject}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
    body: JSON.stringify({
      workspace_id: localStorage.getItem("Workspace_id"),
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
};

export const RestoreArchiveSubject = async (id) => {
  return await fetch(`${ApiURL}/subject-archive-restore/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
    body: JSON.stringify({
      workspace_id: localStorage.getItem("Workspace_id"),
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      return res.status;
    });
};

export const SelectSubject = async (id) => {
  return await fetch(`${ApiURL}/subject-select/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
    body: JSON.stringify({
      workspace_id: localStorage.getItem("Workspace_id"),
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
};
