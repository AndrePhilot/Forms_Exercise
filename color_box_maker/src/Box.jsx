const Box = ({ backgroundColor, width, height, removeBox }) => {
    const boxStyle = {
        backgroundColor,
        width: `${width}px`,
        height: `${height}px`,
    }
    
    return (
        <>
            <div data-testid="box" style={boxStyle}>
            </div>
            <button onClick={removeBox}>X</button>
        </>
    );
};

export default Box;