 function Button({ 
    text = "Click me",
    variant = "primary",
    size = "medium",
    disabled = false,
    loading = false,
    onClick
}) {
    return (
        <button 
            className={'btn btn-${variant} btn-${size}'}
            disabled={disabled || loading}
            onClick={onClick}
        >
            {loading ? "Loading..." : text}
        </button>
    );
}

export default Button;