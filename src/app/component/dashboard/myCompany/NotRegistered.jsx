"use client"
import { Button } from '@heroui/react';
import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { RegFormModal } from './RegFormModal';


const NotRegistered = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex min-h-112 flex-col items-center justify-center rounded-3xl border border-default-200 bg-content1">
            <h2 className="text-2xl font-bold">
                No Company Registered
            </h2>

            <p className="mt-2 text-default-500">
                Register your company to start hiring.
            </p>

            <RegFormModal />


        </div>
    );
};

export default NotRegistered;