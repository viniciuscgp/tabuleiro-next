import Box from "../components/Box"
export default function Tabuleiro(props) 
{
    const styles = {
        display: "grid",
        width: props.size,
        height: props.size,
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr"
    }

    let boxes = [];
    let st = 1, fn = 8;

    for (let i = 1; i <= 8; i++)
    {
        for (let j = st; j <= fn; j++)
        {
            if (j % 2 == 1)
                boxes.push(<Box size={props.size / 8} white />);
            else
                boxes.push(<Box size={props.size / 8} />);
        }
        st = st == 1 ? 0 : 1;
        fn = fn == 8 ? 7 : 8;
    }

    return (
        <div style={styles}>
            {boxes}
        </div>
    )

}