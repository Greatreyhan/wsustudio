import React, { ReactNode } from 'react';
import AdminNavigation from '../organisms/AdminNavigation';
import { Navigate } from "react-router-dom";
import { useFirebase } from "../../utils/FirebaseContext";

interface AdminTemplateProps {
  children: ReactNode;
}

const AdminTemplate: React.FC<AdminTemplateProps> = ({ children }) => {
  const { user, loading } = useFirebase();

  if (loading) {
    return <p>Wait</p>;
  }
  if(user){
  return (
    <div className="flex w-screen">
      <div className="md:w-2/12">
        <AdminNavigation />
      </div>
      <div className="md:w-10/12 w-full">
        {children}
      </div>
    </div>
  );
  } else{
    return <Navigate to="/login" />
  }
};

export default AdminTemplate;
