function getRepos(username) {
	var url = `http://api.github.com/users/${username}/repos`;
	return window.fetch(url).then(response => response.json());
}

export { getRepos };