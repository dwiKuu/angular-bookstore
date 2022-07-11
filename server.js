let exprexss = require('express');

let app = exprexss();

app.use(exprexss.static(__dirname+'/dist/bookstore'));

app.get('/*', (req, resp)=>{
    resp.sendFile(__dirname+'/dist/bookstore/index.html')
});

app.listen(process.env.PORT || 8080)