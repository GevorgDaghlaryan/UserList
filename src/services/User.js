class User {
	static async getUsers() {
		const respone = await fetch('https://api.github.com/users');
		const data =  await respone.json();
		return data;
	}
}

export default User;