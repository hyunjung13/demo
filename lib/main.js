import React from 'react';
import RepositoryList from './RepositoryList';

class HelloWorld extends React.Component {
	render() {
		return (
				<div>
					<h2>My demo</h2>
					<RepositoryList />
				</div>
		);
	}
}

React.render(<HelloWorld />, document.body);



