import {useState} from "react";

const useForm = (initialState = {}) => {
    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const resetForm = () => {
        setFormData(initialState);
    };
    const clearFormData =()=>{
        setFormData(initialState)
    }
    return {
        formData,
        handleChange,
        resetForm,
        clearFormData,
    };
};

export default useForm;