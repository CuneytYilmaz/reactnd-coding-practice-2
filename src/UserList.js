import React, { Component } from 'react'

class UserList extends Component {
	render(){
      	const {users, usersWhoLikes } = this.props;
      
      	console.log(usersWhoLikes);
      
      	if (!usersWhoLikes || usersWhoLikes.length === 0) {
        	return <p>None of the current users liked this movie.</p>;
        }
      
        const userList = usersWhoLikes.map(id => (
        	<li key={id}>
               {users[id].name}
            </li>
        ));
      
    	return (
          <ul>{userList}</ul>
        );
    }
}

export default UserList;