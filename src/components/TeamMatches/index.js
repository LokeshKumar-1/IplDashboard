import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
import MatchCard from '../MatchCard'
import LatestMatch from '../LatestMatch'

class TeamMatches extends Component {
  state = {
    fetchedLatestMatchDetails: {},
    fetchedRecentMatches: [],
    fetchedTeamBannerUrl: '',
    isLoading: true,
    team: '',
  }

  componentDidMount() {
    this.fetchingADataOfAMatch()
  }

  fetchingADataOfAMatch = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log('match:', id)
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const latestMatchDetails = data.latest_match_details
    const recentMatches = data.recent_matches
    const teamBannerUrl = data.team_banner_url

    const formattedLatestMatchDetails = {
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      id: latestMatchDetails.id,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }

    const formattedRecentMatches = recentMatches.map(item => ({
      competingTeam: item.competing_team,
      competingTeamLogo: item.competing_team_logo,
      date: item.date,
      firstInnings: item.first_innings,
      id: item.id,
      manOfTheMatch: item.man_of_the_match,
      matchStatus: item.match_status,
      result: item.result,
      secondInnings: item.second_innings,
      umpires: item.umpires,
      venue: item.venue,
    }))

    console.log(formattedLatestMatchDetails)
    console.log(formattedRecentMatches)
    console.log(teamBannerUrl)

    this.setState({
      fetchedLatestMatchDetails: formattedLatestMatchDetails,
      fetchedRecentMatches: formattedRecentMatches,
      fetchedTeamBannerUrl: teamBannerUrl,
      isLoading: false,
      team: id,
    })
  }

  render() {
    const {
      isLoading,
      fetchedLatestMatchDetails,
      fetchedRecentMatches,
      fetchedTeamBannerUrl,
      team,
    } = this.state

    return (
      <div className={`${team} teamMatch-bg-Container`}>
        {isLoading ? (
          // eslint-disable-next-line react/no-unknown-property
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="TM-child-container">
            <div className="teamMatch-content-container">
              <img src={fetchedTeamBannerUrl} alt="team banner" width="100%" />
              <h1 className="TM-heading">Latest Matches</h1>
              <LatestMatch item={fetchedLatestMatchDetails} />
            </div>
            <ul className="TM-RecentMatches-container">
              {fetchedRecentMatches.map(item => (
                <MatchCard item={item} key={item.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
