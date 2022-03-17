import "../App"
function Homepage(props) {
    return (
        <div>
            <h1>My Hardware Store</h1>
            {/* brush as default value */}
            <span>Currently On Sale: {props.saleItem}</span> 

            <span>
                <button onClick={props.toggleEditSaleItem}>{props.editable ?"Hide" : "Edit Sale Item" }</button>
                {/* change description of button context between "hide" and "edit sale item" */}
            </span>
            {/* show or hide input field depend on button editable value below */}
            { props.editable ? 
                <div>
                    <input 
                        type="text" 
                        value={props.saleItem} // we now have to tell React how to react to the changes, starting with default value "brush"
                        onChange={props.handleItemCurrentlyOnSaleChange}/>
                </div> : null}
        </div>
    )
}

export default Homepage;