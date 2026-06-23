import { requireRole } from '@/app/lib/core/session';
import React from 'react';

const AdminLayoutPage = async ({children}) => {
    await requireRole('admin');
    return children;
};

export default AdminLayoutPage;