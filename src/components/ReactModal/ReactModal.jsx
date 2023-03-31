import { createPortal } from "react-dom";
import Backdrop from "../Backdrop/Backdrop";

function ReactPortal({ children, wrapperId = "react-portal", onClose }) {
    return createPortal(
        <Backdrop onClose={onClose}>{children}</Backdrop>,
        document.getElementById(wrapperId)
    );
}
export default ReactPortal;
