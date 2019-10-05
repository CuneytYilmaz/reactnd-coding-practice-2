import React, {Component} from 'react'
import UserList from './UserList'

class MovieCard extends Component {
	render(){
      	const {users, usersWhoLikes, movieInfo } = this.props;
      
		return(
          <li key={movieInfo.id}>
			<h2>{movieInfo.name}</h2>
			<p>Liked By:</p>
			<ul>
				<UserList users={users} usersWhoLikes={usersWhoLikes} />
			</ul>
		  </li>
        );
	}
}

export default MovieCard;