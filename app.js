const express = require('express');

const Mock = require('mockjs');
const app = express();


app.get('/test',(req,res)=>{

	const data = Mock.mock({

		'list|10':[
		{
			'name':'@cname()',
			'email':'@cword(4,60)'
		},

		]
	});
	res.send(data);
});


app.listen(3002);
console.log('服务器启动成功了');


