export default (ctx = null, next = ()=>{}) =>{
  try {
    console.log('basicMiddleware.js');
    next();
  } catch (error) {
    console.error(error);
    if (error.code) {
      ctx.response.body = error;
      ctx.response.status = error.code
    } else {
      ctx.response.body = error;
      ctx.response.status = 500
    }
  }
}