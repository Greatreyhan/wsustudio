import React, { ReactNode } from 'react';
import AdminNavigation from '../organisms/AdminNavigation';

interface AdminTemplateProps {
  children: ReactNode;
}

const AdminTemplate: React.FC<AdminTemplateProps> = ({ children }) => {
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
};

export default AdminTemplate;
