import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState(null);
    const [modalBody, setModalBody] = useState(null);
    const [tableRef, setTableRef] = useState(null);


    const showModal = (title, content) => {
        setModalTitle(title);
        setModalBody(content);
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const setDynamicModalTitle = (title) => setModalTitle(title);

    return (
        <ModalContext.Provider value={{ modalTitle, modalBody, isModalOpen, showModal, closeModal, tableRef, setTableRef, setDynamicModalTitle }}>
            {children}
        </ModalContext.Provider>
    )
}