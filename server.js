/** @format */

const io = require('socket.io')();

io.on('connection', (socket) => {
	// socket.on('send-teams', (team) => {
	// 	io.sockets.emit('receive-teams', team).then(console.log(team));
	// });

	socket.on('send-matchs', (match) => {
		io.sockets.emit('receive-matchs', match);
	});

	socket.on('send-maps', (map) => {
		io.sockets.emit('receive-maps', map);
	});

	// socket.on('send-bans', (match) => {
	// 	io.sockets.emit('receive-bans', match).then(console.log(match));
	// });

	socket.on('show-draft', () => {
		io.sockets.emit('receive-draft');
	});

	socket.on('show-veto', () => {
		io.sockets.emit('receive-veto');
	});

	// /*
	socket.on('sendStartTimer', () => {
		io.sockets.emit('receiveStartTimer');
	});

	socket.on('sendUpdatedPicks', (newPicks) => {
		io.sockets.emit('receiveUpdatedPicks', newPicks);
	});

	socket.on('send-swap', (swapSide) => {
		io.sockets.emit('receive-swap', swapSide);
	});

	socket.on('send-previous-matchs', (previousMatchs) => {
		io.sockets.emit('receive-previousMatchs', previousMatchs);
	});
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);
