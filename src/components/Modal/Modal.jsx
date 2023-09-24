import PropTypes from "prop-types";
import './Modal.scss';

const Modal = ({header, text, actions, close, isCloseButton}) => {
  console.log(isCloseButton);

  return (
      <div className="overlay" onClick={close}>
        <div className="modal-win" onClick={(e) => e.stopPropagation()}>
          <div className="modal-win__header">
            <h2>{header}</h2>
            {isCloseButton && <div className="btn-close" onClick={close}></div>}
          </div>
          <div className="modal-win__text">
            <p>{text}</p>
          </div>
          <div className="modal-win__btns">
            {actions}
          </div>
        </div>
      </div>
  )
}

Modal.propTypes = {
  actions: PropTypes.array.isRequired,
}

Modal.defaultProps = {
  header: "Add to cart",
  text: "Do you want to do this action?",
}

export default Modal;