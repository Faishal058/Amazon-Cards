export default function Price({oldPrice, newPrice}) {
    let styles = {textDecorationLine: "line-through"}
    let newStyles = {
        fontWeight: "bold", 
    }
    let colStyles = {backgroundColor: "lightPink",  borderBottomLeftRadius: "14px", borderBottomRightRadius: "14px"};
    return (
        <div style = {colStyles}>
            <span style = {styles}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;
            <span style = {newStyles}>{newPrice}</span>
        </div>
        
    );
}