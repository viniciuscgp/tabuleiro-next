export default function Box(props)
{
    let styles = {
        width: props.size,
        height: props.size,
        backgroundColor: props.white ? "white" : "black"
    };
    return (
        <div style={styles}>

        </div>
    );
}