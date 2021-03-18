function Item(props) {
    return (
        <div className="field-wrap">
            <label>
                {props.title}<span className="req">*</span>
            </label>
            <input type={props.type} 
                required autoComplete="off" 
                value= {props.value} 
                name= {props.name}
                onChange={(event) => props.handleChange(event)}
            />
        </div>
    );
}

export default Item;