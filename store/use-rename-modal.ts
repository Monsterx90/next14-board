import {create} from "zustand";

const defultValues = {id:"" , title:""}

interface IRenameModal {
    isOpen: boolean
    initialValues: typeof defultValues;
    onOpen: (id: string, title: string) => void;
    onClose: () => void;
}

export const useRenameModal = create<IRenameModal>((set) => ({
    isOpen: false,
    initialValues: defultValues,
    onOpen: (id, title) => set({isOpen: true, initialValues: {id, title}}),
    onClose: () => set({isOpen: false, initialValues: defultValues}),
}))