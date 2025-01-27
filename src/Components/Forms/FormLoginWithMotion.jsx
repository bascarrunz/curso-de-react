import { useState } from "react";
import { motion } from "motion/react"
import useForm from "../Hooks/useForm.js";
import ModalInfo from "../../Components/Modals/ModalInfo.jsx";

import { useDispatch, useSelector } from "react-redux";
import { setInitialValue } from "../../store/features/forms/formSlice.js";
// eslint-disable-next-line react/prop-types
const FormWithMotionAndHook = ({ titleForm }) => {
    /*const {formData, handleChange} = useForm({
        username: '',
        email: ''
    });*/
    const dispatch = useDispatch();
    const formData = useSelector((state) => state.loginFormData.loginFormData);
    const [formState, setFormState] = useState(formData);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [showPassword, setShowPAssword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        //console.log(formData)
        e.preventDefault();
        if (formState.password === formData.password) {
            dispatch(setInitialValue(formState));
            setModalMessage(`Bienvenido: ${formState.username}`);
        } else {
            setModalMessage("Username/Password incorrectos!!");
        }
        setShowModal(true);
    };

    const cambiarVisibilidad = () => {
        setShowPAssword((prev) => !prev);
    };

    const onCloseModalInfo = () => {
        setShowModal(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <ModalInfo
                visible={showModal}
                /*message="Formulario enviado!!!"*/
                message={modalMessage}
                onClose={onCloseModalInfo}
            />
            <form onSubmit={handleSubmit} className="form-container">
                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h3>{titleForm}</h3>
                </motion.div>
                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="formulario espacio">
                        <label>
                            Module:
                            <input
                                type="text"
                                name="module"
                                value={formState.module}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="formulario espacio">
                        <label>
                            Username:
                            <input
                                type="text"
                                name="username"
                                value={formState.username}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="formulario espacio">
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                value={formState.email}
                                onChange={handleChange}
                                required
                            />
                        </label>

                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="formulario">
                        <label>Password:</label>
                            <input
                                type={!showPassword ? "password" : "text"}
                                name="password"
                                /*value={formState.password}*/
                                onChange={handleChange}
                                required
                            />
                            <button
                                type="button"
                                onClick={cambiarVisibilidad}
                                style={{ marginLeft: "10px" }}
                            >
                                {showPassword ? "Ocultar" : "Mostrar"}
                            </button>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <button type="submit">Enviar</button>
                </motion.div>
            </form>
        </motion.div>
    );
};
export default FormWithMotionAndHook;