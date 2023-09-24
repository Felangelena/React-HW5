import PropTypes from "prop-types";
import './Button.scss';

const Button = ({backgroundColor, text, handleClick, className}) => {

    return (
        <button type="button" className={className}
        style={{backgroundColor: backgroundColor}}
        onClick={handleClick}>
        {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
}

Button.defaultProps = {
    backgroundColor: "black",
    className: "btn"
}

export default Button;