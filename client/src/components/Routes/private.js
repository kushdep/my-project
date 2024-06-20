import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "./Spinner";

export default function PrivateRoute() {
  const [ok, setOK] = useState(false);
  const [auth, setAuth] = useAuth(false);

  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get("/api/v1/auth/user-auth",
        {
          headers:{
            "Authorization":auth?.token
          }
        }
      );
      if (res.data.ok) {
        setOK(true);
      } else {
        setOK(false);
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);
  return ok ? <Outlet /> : <Spinner path=""/>;
}
  