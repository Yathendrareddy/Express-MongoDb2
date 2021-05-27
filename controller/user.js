import {Quote} from "../model/user.js"

let quote = []

export const getUsers = (req,res)=>{
    console.log("getUsers Started")
    // console.log(req.query.name)
    // console.log(req.query.age)
    console.log(req.query)
    // if(req.query.name){
    //     getUsersByName(req,res)
    // }
    // else{
    Quote.find()
    .then(
        (result)=>{
            res.send(result)
        }
    )
    .catch(
        (err)=>{
            console.log(err)
        }
    )
    // }
}

export const createUsers = (req,res)=>{
    console.log("createUsers Started")
    const quote = new Quote({
        quote:req.body.quote,
        author:req.body.author,
    })
    quote.save()
    res.send({"result":"success"})
    // .then(
    //     (result)=>{
    //         res.send(result)
    //     }
    // )
    // .catch(
    //     (err)=>{
    //         console.log(err)
    //     }
    // )
}

// const getUsersByName = (req,res)=>{
//     Employee.aggregate(
//         [{$match:{"studentFirstName":req.query.name}}]
//     )
//     .then(
//         (result)=>{
//             res.send(result)
//         }
//     )
//     .catch(
//         (err)=>{
//             console.log(err)
//         }
//     )
// }