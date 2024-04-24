import "./backdrop.css";

function Backdrop({ children, onClose }) {
    const handleCloseBackdrop = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <section className="backdrop-container" onClick={handleCloseBackdrop}>
            <section className="content-container">{children}</section>
        </section>
    );
}

export default Backdrop;
