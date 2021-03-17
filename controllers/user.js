const { v4: uuidv4 } = require('uuid')

let users = [
{id: 1, name: 'Simerah', email: 'merah123@gmail.com'},
{id: 2, name: 'Sibiru', email: 'biru234@gmail.com'},
{id: 3, name: 'Sikuning', email: 'kuning345@gmail.com'},
{id: 4, name: 'Sihijau', email: 'hijau456@gmail.com'}
]

module.exports = {
	index: function(request, response){
		response.render('pages/user/index', {users: users})
	},
	show: function(request, response) {
		const id = request.params.id
		const data = users.filter(user => {
			return user.id == id
		})

		response.render('pages/user/show', {user: data})
	},

	create: function(request, response) {
		response.render('pages/user/create')

	},
	store: function(request, response){
		users.push({
		id: uuidv4(),
		name: request.body.name,
		email: request.body.email
		})

		response.redirect('/users')

		//response.send(users)
		//console.log(users)
		//response.end()
		//console.log(request.body)
	},
	update: function(request, response){
		const id = request.params.id
		users.filter(user => {
			if(user.id == id) {
			user.id = id
			user.name = request.body.name
			user.email = request.body.email

			return user
		}
	})
		response.json({
		    status: true,
			data: users,
			message: 'Data Users Berhasil diedit',
			method: request.method,
			url: request.url
	})
	//response.send(id)
	//melakukan update
	},
	delete: function(request, response){
		let id = request.params.userId
		users = users.filter(user => user.id != id)
		response.send({
		    status: true,
			data: users,
			message: 'Data Users Berhasil dihapus',
			method: request.method,
			url: request.url
	})
	//response.send(request.params.userId)
	//menghapus data
	}
}