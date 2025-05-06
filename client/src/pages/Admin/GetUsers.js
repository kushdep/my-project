import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Layout from './../../components/Layout/Layout' 
import AdminMenu from '../../components/Layout/AdminMenu'

const GetUsers = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const { data } = await axios.get("/api/v1/auth/get-users");
    setUsers(data);
  };
  useEffect(() => {
    getUsers();
  }, []);
  console.log(users);
  return (
    <Layout>
    <div className='container-fluid m-3 p-3'>
     <div className='row'>
        <div className='col-md-3'>
          <AdminMenu/>
        </div>
        <div className='col-md-9'>
          <div className='card w-75 p-3'>
            <h3>Name : {users[0]?.name}</h3>
            <h3>Email : {users[0]?.email}</h3>
          </div>
        </div>
     </div>
    </div>
  </Layout>
  );
};

export default GetUsers;
