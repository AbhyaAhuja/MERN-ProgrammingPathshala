
import {Link} from 'react-router-dom'

const HistoryCard= (props)=>{
    // const {userPoints, setUserPoints} = props;


return(
    <div className = "history-card"><h4>{props.item.title}</h4>
    <p>{props.item.description}</p>
    
    <br/><Link to = {`/newhistory/${props.item.id}`}>More</Link>
    
    </div>
)
}
        export default HistoryCard;