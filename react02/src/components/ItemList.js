
function ItemList(props) {
    return (
        <ul>
            {props.items.map((item, index) => 
                <li style={{backgroundColor: index % 2 === 0 ? 'white' : 'aquamarine'
                }}>{item}</li>
            )}
        </ul>
    )
}

export default ItemList