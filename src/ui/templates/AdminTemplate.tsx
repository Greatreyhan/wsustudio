import React, { ReactNode } from 'react';
import AdminNavigation from '../organisms/AdminNavigation';
import { Navigate } from "react-router-dom";
import { useFirebase } from "../../utils/FirebaseContext";
import Notification from '../../utils/Notification';

interface AdminTemplateProps {
  children: ReactNode;
}

const AdminTemplate: React.FC<AdminTemplateProps> = ({ children }) => {
  const { user, loading } = useFirebase();

  if (loading) {
    return (
      <div className='w-screen h-screen z-50 justify-center items-center flex fixed top-0 left-0 bg-black bg-opacity-20'>
        <div className='loader'></div>
      </div>
    );
  }
  if (user) {
    return (
      <div className="flex w-screen">
        <Notification />
        <div className="md:w-2/12">
          <AdminNavigation />
        </div>
        <div className="md:w-10/12 w-full">
          {children}
        </div>
      </div>
    );
  } else {
    return <Navigate to="/login" />
  }
};

export default AdminTemplate;
