

const mypromesse = new Promise(
    (resolve, reject) => {
        setTimeout(()=>{
            resolve("Deu certo!!!")
        }, 3000)
    }
)

const mypromesse2 = new Promise(
    (resolve, reject) => {
        setTimeout(()=>{
            reject("Deu ruim!!!")
        }, 3000)
    }
)

// mypromesse.then((msg)=>{
//     console.log(msg);
// })

mypromesse2.then((msg)=>{
    console.log(msg);
}).catch((erro)=>{
    console.log(`erro : ${erro}`);
})