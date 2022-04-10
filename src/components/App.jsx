import React from 'react';
import Searchbar from './Searchbar';
import ImageList from './ImageList'

import unsplash from '../api/unsplash';
import './App.css';


class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = (term) => {
    unsplash.get('/search/photos',{
      params: {query: term}
    })
    .then((response) => { 
      this.setState( {images: response.data.results} 
        );
    }); 
  }

  render() {
    return (
      <div className='container ui' style={{ marginTop: '10px' }}>
        <h1 className='center aligned ui block header inverted red'>
          Search for images
        </h1>
        <Searchbar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}
export default App;