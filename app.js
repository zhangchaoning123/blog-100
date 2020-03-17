//处理http请求和响应
const Router=require('./src/router/blog');
function handleServer (req,res){
    const method=req.method;
    req.path=req.url.split('?')[0];
    res.setHeader('Content-type','application/json');


//处理博客列表请求
const blogData=Router.handleBlogRouter(req,res);
res.end(JSON.stringify(blogData));

    
}
module.log = handleServer;