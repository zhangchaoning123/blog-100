function handleBlogRouter(req,res){
    const method = req.method;
    if(method=='GET' && req.path=='/api/blog/list'){
        //向数据库获取博客信息 sql
        return{
            id:'1',
            title:'标题',
            content:'内容',
            time:'351646',
        }
    }

};
module.exports={
    handleBlogRouter
}