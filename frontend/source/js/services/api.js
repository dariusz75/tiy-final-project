var jQuery = require('jquery');


function registerEmployer(employer, callback) {
console.log(employer);
console.log(JSON.stringify(employer));
	var request =	jQuery.ajax({
			method: 'post',
			url: 'http://localhost:8080/api/employers',
			data: JSON.stringify(employer),
			contentType: 'application/json',
			datatype: 'json'
		});

	request.done(function onSuccess(data) {
		callback(null, data);
	});

	request.fail(function onFailure(error) {
		callback(error, null);
	});
}


module.exports = {
	registerEmployer: registerEmployer
};
