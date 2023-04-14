function Mylist(props) {
    return ( 
        <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Settings</a></li>
                <li><a href="#">Fotter</a></li>
                <li><a href="#">{props.mynav}</a></li>
                <li><a href="#">{props.myalamat}</a></li>

              </ul>
     );
}

export default Mylist;