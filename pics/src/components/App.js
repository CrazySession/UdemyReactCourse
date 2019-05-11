import React from "react";

import unsplash from '../api/unspalsh';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {
    state = { images : [] };

/*    onSearchSubmit(term){
        axios
            .get('https://api.unsplash.com/search/photos', {
            params: { query : term },
            headers: {
                Authorization : 'Client-ID dbf0e4e6d245b172923a9371e186893cd002b2d1e6e964140e2a4191eeacae31'
            }
        })
            .then((respone)=>{
                console.log(respone.data.results);
            });
    }*/
    onSearchSubmit = async (term) =>{
        const response = await unsplash.get('/search/photos', {
                params: { query : term }
            });

        this.setState({ images : response.data.results });
    };

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}   />
                <ImageList  images={this.state.images}/>
            </div>
        )
    }
}

export default App