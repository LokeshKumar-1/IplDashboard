import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {item} = props
  const {id, name, teamImageUrl} = item
  console.log('teamId:', id)

  return (
    <Link className="linkEl" to={`/team-matches/${id}`}>
      <li className="cardItemContainer">
        <img src={teamImageUrl} alt={name} className="card-team-image" />
        <p className="card-teamName">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
