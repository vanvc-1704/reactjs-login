
function TabGroup(props) {
    const isSignUp = props.isSignUp;

    return (
        <ul className="tab-group">
            <li className= { isSignUp ? 'tab active' : 'tab'}><a href= "#!" onClick = { () => props.handleClick(true)}>Sign Up</a></li>
            <li className= { !isSignUp ? 'tab active' : 'tab'}><a href= "#!" onClick = { () => props.handleClick(false)}>Log In</a></li>
        </ul>
    )
}

export default TabGroup;