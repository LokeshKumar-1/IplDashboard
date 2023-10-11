import './index.css'

const MatchCard = props => {
  const {item} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = item

  const statusColor = matchStatus === 'Won' ? 'statusInGreen' : 'statusInRed'

  return (
    <li className="MC-listItem">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="recentTeam-logo"
      />
      <p className="MC-teamName">{competingTeam}</p>
      <p>{result}</p>
      <p className={statusColor}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
