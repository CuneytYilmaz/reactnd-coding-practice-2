import React, {Component} from 'react'
import MovieCard from './MovieCard'

class Dashboard extends Component {
	render (){
      	const {users, movies, usersByMovie } = this.props;
        const moviesCards = Object.keys(movies).map(id => (
        	<MovieCard key={id}
           		users={users}
          		usersWhoLikes={usersByMovie[id]}
                movieInfo={movies[id]}
          	/>
        ));

    	return(
        	<ul>{moviesCards}</ul>
        );
    }
}

export default Dashboard;