import React from "react";
import axios from 'axios';
import SearchBar from "./SearchBar";



class App extends React.Component {

    onSearchSubmit(term){
        axios.get('https://api.unsplash.com/search/photos', {
            params:{query:term},
            headers:{
                Authorization: 'Client-ID uGTDcSQ35edwFgzJgCCK0Yh7x2eNHAxh9LJXXfJWZ9I'
            }
        })
         
    }

render(){
    return ( 
        <div className="ui container" style={{marginTop:'10px'}}>
            <SearchBar functionSubmit={this.onSearchSubmit}/>
        </div>
    );
 }   
}

export default App; 