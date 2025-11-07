import cluster from "cluster"
import os from "os"
import { app } from "./index.js"

const numOfCpus = os.cpus.length

if (cluster.isPrimary) {
    console.log(`Master ${process.pid} is running`);
    
    // Fork workers
    for (let i = 0; i < numOfCpus; i++) {
        cluster.fork()
    }
} else{
    app.listen(3000, ()=>{
        console.log(`Worker ${process.pid} started`);
    })
}

