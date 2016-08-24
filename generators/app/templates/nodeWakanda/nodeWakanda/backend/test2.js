//process.on('uncaughtExcepetion',function(err){
//	console.log(err);
//});
var filepath = File('/PROJECT/backend/wakanda/model.js').path;
let console=requireNode("console");
let devis=requireNode("devis");	
//devis.use('test2');
//console.log(filepath);
let data={ID:1};
devis.use(filepath);
devis.act({role:"model",action:"initialize",dataClass:"Employee"},function(err,res){console.log(res)});
//devis.act({role:"model",action:"POST",Add:data},function(err,res){console.log(res)});
//devis.act({role:"model",action:"GET",func:"first"},function(err,res){console.log(res)});
//devis.act({role:"model",action:"PUT",ID:4,Update:data},function(err,res){console.log(res)});
//devis.act({role:"model",action:"GET",func:"find"},function(err,res){console.log(res)});
devis.act({role:"model",action:"DELETE",ID:4},function(err,res){
	console.log(res);
});
devis.act({role:"model",action:"GET",data:data},function(err,res){console.log(res)});