// 加载Express模块
const express = require('express');
// 加载CORS模块
const cors = require('cors');

// 加载MySQL模块
const mysql = require('mysql');

// 创建MySQL连接池
const pool = mysql.createPool({
  // 数据库服务器的地址
  host:'127.0.0.1',
  // 数据库服务器的端口号
  port:3306,
  // 数据库用户的用户名
  user:'root',
  // 数据库用户的密码
  password:'',
  // 数据库名称
  database:'xzqa',
  // 编码方式
  charset:'utf8',
  // 最大连接数
  connectionLimit:20
});

// 创建WEB服务器实例
const server = express();

// 将CORS作为Server的中间件
server.use(cors({
  origin:['http://localhost:8080','http://127.0.0.1:8080']
}));


//获取所有文章分类信息的接口
server.get('/category',(req,res)=>{
  //获取文章分类表中的全部数据
  let sql = 'SELECT id,category_name FROM xzqa_category';
  //通过连接池的query()方法来执行SQL语句
  pool.query(sql,(error,results)=>{      
      if(error) throw error;
      res.send({message:'查询成功',code:1,results:results});
  });  
});

// 获取指定分类下包含的文章数据
server.get('/articles',(req,res)=>{
  // 获取地址栏的cid参数,该参数表示的分类的ID
  let cid = req.query.cid;
  // 获取地址栏中的page参数,该参数表示页码
  let page = parseInt(req.query.page);
  //存储分页显示的记录数量
  let pagesize = 10;
  // 根据page参数值并结合SELECT...LIMIT子句的标准计算公式来计算offset参数值
  let offset = (page-1) * pagesize;
  // 以当前的cid为条件进行文章的查找操作
  let sql = 'SELECT id,subject,description,image FROM xzqa_article  WHERE category_id=? LIMIT ?,?';
  // 执行SQL查询
  pool.query(sql,[cid,offset,pagesize],(error,results)=>{
    if(error) throw error;
    res.send({message:'查询成功',code:1,results:results});
  });
});

// 获取文章详细信息(包括标题,正文,作者等)
server.get('/details',(req,res)=>{
  //获取URL地址栏的参数
  let id =  req.query.id;
  //SQL查询
  let sql = 'SELECT r.id,subject,content,created_at,nickname,avatar,article_number FROM xzqa_article AS r INNER JOIN xzqa_author AS u ON author_id = u.id WHERE r.id=?';
  // 执行SQL查询
  pool.query(sql,[id],(error,results)=>{
    if(error) throw error;
    //results代表的返回的结果集,为数组类型;同是在该数组中包含了一个
    //对象,该对象就是文章的详细信息,在使用时,无需返回数组可直接返回对象
    //所以results[0]代表的就是文章详细信息的对象
    //results此时的结果如 [{id:1,subject:'AA',nickname:'淘气的松鼠'}]
    res.send({message:'查询成功',code:1,articleInfo:results[0]});
  });

});

// 指定WEB服务器监听的端口
server.listen(3000);

