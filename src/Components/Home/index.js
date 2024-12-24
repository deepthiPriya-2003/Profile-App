import {Component} from "react"
import "./index.css"

class Home extends Component{
    state={profileData:[]}

    componentDidMount(){
        this.getProfileDetails()

    }

    getProfileDetails=async()=>{
        const url = "https://randomuser.me/api/?page=1&results=1&seed=abc"
        const response = await fetch(url)
        const data = await response.json()
        // console.log(data)
        const results = await data.results
       // console.log(results)
        const formattedData = results.map(eachItem => ({
            id: eachItem.id.value,
            firstName: eachItem.name.first,
            lastName: eachItem.name.last,
            gender: eachItem.gender,
            phoneNumber: eachItem.phone,
            largeImageUrl: eachItem.picture.large,
            mediumImageUrl: eachItem.picture.medium,
            thumbnail: eachItem.picture.thumbnail,
            
          }))
          this.setState({profileData:formattedData[0]})


    } 

    


    render(){
       let {profileData} = this.state 
       const {firstName, lastName, gender, phoneNumber, largeImageUrl, mediumImageUrl, thumbnail} = profileData
        return(
            <div className="bg-container">
             <div className="profile-card-container">
              <img src={largeImageUrl} alt="image" className="profile-image"/>
              <div>
                <div className="name-container">
                <h1 className="text-styling">{firstName}</h1>
                <h1>{lastName}</h1>
                </div>
                <p className="details">{gender}</p>
                <p className="details">{phoneNumber}</p>
                </div>
             </div>
            </div>
        )
    }
}

export default Home 