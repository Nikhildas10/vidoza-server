const jsonServer=require("json-server")
const cors=require("cors")

const server=jsonServer.create()
const middleware=jsonServer.defaults()
const router=jsonServer.router("db.json")

server.use(middleware)
server.use(cors())
server.use(router)
const port=5000
server.listen(port,()=>{
    console.log(`server started at port:${port}`);
})
