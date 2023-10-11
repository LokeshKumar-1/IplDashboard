import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {
    matchData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.fetchingMatchData()
  }

  fetchingMatchData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data

    const formattedData = teams.map(item => ({
      id: item.id,
      name: item.name,
      teamImageUrl: item.team_image_url,
    }))
    console.log(formattedData)
    this.setState({matchData: formattedData, isLoading: false})
  }

  render() {
    const {matchData, isLoading} = this.state

    return (
      <Link to="/" className="linkEl">
        <div className="home-bg-container">
          {isLoading ? (
            // eslint-disable-next-line react/no-unknown-property
            <div testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            <>
              <div className="logo-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                  alt="ipl logo"
                  className="logoImage"
                />
                <h1 className="logo-heading">IPL Dashboard</h1>
              </div>

              <ul className="home-list-container">
                {matchData.map(item => (
                  <TeamCard item={item} key={item.id} />
                ))}
              </ul>
            </>
          )}
        </div>
      </Link>
    )
  }
}

export default Home
