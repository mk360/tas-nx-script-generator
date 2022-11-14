import ModalProps from "./props";
import './style.scss';

function Modal(props: ModalProps) {
    const { children, onClose } = props;

    return (
        <div className='modal-backdrop'>
            <div className='modal-content'>
                {children}
            </div>
        </div>
    )
};

export default Modal;
