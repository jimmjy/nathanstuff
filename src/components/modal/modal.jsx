import React, { useEffect, useRef, Fragment } from "react";
import { createPortal } from "react-dom";

//styles
import "./modal.scss";

const Modal = ({ children, setIsModalShowing, message }) => {
	//create reference for modal
	const elRef = useRef(null);

	//wrap the modal
	if (!elRef.current) {
		const div = document.createElement("div");
		div.classList.add("modal-container");
		elRef.current = div;
	}

	//build modal
	useEffect(() => {
		const modalRoot = document.getElementById("modal");
		modalRoot && modalRoot.appendChild(elRef.current);

		return () => modalRoot?.removeChild(elRef.current);
	}, []);

	//close modal if clicked outside
	const closeModal = e => {
		console.log(e.target.className);

		if (e.target.className !== "modal-body") {
			setIsModalShowing(false);
		}
	};

	//add/remove closemodal event
	useEffect(() => {
		window.addEventListener("click", closeModal);

		return () => window.removeEventListener("click", closeModal);
	});

	return createPortal(<Fragment>{children}</Fragment>, elRef.current);
};

export default Modal;
