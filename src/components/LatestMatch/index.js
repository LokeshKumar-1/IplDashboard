import './index.css'

const LatestMatch = props => {
  const {item} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = item

  return (
    <div className="latestMatch-container">
      <p className="LM-heading">{competingTeam}</p>
      <div className="placeAndLogo-container">
        <div className="placeDetails">
          <p className="TM-dateEl">{date}</p>
          <p className="TM-FS">{venue}</p>
          <p className="TM-FS">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          width="200px"
        />
      </div>
      <hr className="TM-lineEl" />
      <p className="TM-Bt-FS">First Innings</p>
      <p className="TM-Bt-FS">{firstInnings}</p>
      <p className="TM-Bt-FS">Second Innings</p>
      <p className="TM-Bt-FS">{secondInnings}</p>
      <p className="TM-Bt-FS">Man of The Match</p>
      <p className="TM-Bt-FS">{manOfTheMatch}</p>
      <p className="TM-Bt-FS">Umpires</p>
      <p className="TM-Bt-FS">{umpires}</p>
    </div>
  )
}

export default LatestMatch
