function EventExamples() {

    const handleClick = () => {
        console.log("Button clicked!");
    };

    const handleInput = (event) => {
        console.log("Input value:", event.target.value);
    };

    const handleItemClick = (itemId) => {
        console.log("Item clicked:", itemId);
    };

    return (
        <div>
            <h2>Event Handling Examples</h2>

            {/* Basic click */}
            <button onClick={handleClick}>
                Click Me
            </button>

            {/* Input event */}
            <input
                onChange={handleInput}
                placeholder="Type something"
            />

            {/* Passing parameter */}
            <button onClick={() => handleItemClick(123)}>
                Item 123
            </button>

            {/* Prevent default */}
            <form onSubmit={(e) => {
                e.preventDefault();
                console.log("Form submitted");
            }}>
                <button type="submit">Submit Form</button>
            </form>
        </div>
    );
}

export default EventExamples;