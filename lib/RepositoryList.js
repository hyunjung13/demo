import React from 'react';
import { getRepos } from './api';
import Repo from './Repo';

export default class RepositoryList extends React.Component {
	constructor(props) {
		super(props);
		this.state = { repos: [] };
	}

	componentDidMount() {
		getRepos('micky2be').then(repos => {
			this.setState({ repos });
		});
	}

	render() {
		var repos = this.state.repos.map(repo => {
			return (
					<li key={ repo.id }>
						<Repo raw={ repo } />
					</li>
			);
		});
		return  <ul>{ repos }</ul>;
	}
}

