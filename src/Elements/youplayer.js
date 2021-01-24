import React from 'react'
import axios from 'axios'
import Iframe from 'react-iframe'


class youplayer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: 0,
            error: true,
            urls: Array(5).fill("")
        }
        this.getData = this.getData.bind(this)
        this.onClick = this.onClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        const { name, value } = e.target;
        this.setState({
            [name]:value
        })
    }
    componentDidMount(){
        
    }
    getData(){
        const API_KEY = 'AIzaSyDu07I1oOLekeOffSrjcMNORpRqzR6xbZw'
        axios.get(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}`,{headers : {
            "Accept": "application/json"
          }})
        .then(response => {
            console.log(response)
            this.setState({
                data: response.data.items,
                error: false
            })
            console.log(this.state.data)
            this.state.data.map(video => {console.log(video.id.videoId)})
        })
        .catch(error => {
            this.setState({
                error: error
            })
        })
       .then(()=>{ const urls = this.state.data.map(video=>{return('http://www.youtube.com/embed/' + video.id.videoId)})
        this.setState({
            urls: urls
        })
    })
    }
    onClick = () => {
        this.getData()
        setTimeout(()=>console.log(this.state.urls),10000)
    }
    render(){
        const { urls, error} = this.state         
        const videoList =  (error)?(null):(
                  urls.map(video => {return(
                  <Iframe url= {video}
                    width="200px"
                    height="100px"
                    id="myId"
                    className="myClass"
                    display="initial"/>
                )}))
                
        return(
            <div> 
                <input type="button" value="Show Videos" onClick={this.onClick} /><br />
                {(error)?(null):(videoList)}
                <br />
                
            </div>
        )
    }
}
export default youplayer
