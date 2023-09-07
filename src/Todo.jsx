// export default function Todo({task}){
//     return(
//         <li>Task : {task}</li>
//     )
// }

// conditional rendering option 1
// export default function Todo({task,isDone}){
//    if(isDone === true){
//     return <li>Finished: {task}</li>
//    }else{
//     return <li>Work on : {task}</li>
//    }
// }

// conditional rendering option 2

// export default function Todo({task,isDone}){
//     if(isDone){
//         return <li>Finished : {task}</li>
//     }
//     return <li>Work on : {task}</li>

//  }

// conditional rendering 3 
// export default function Todo({task,isDone}){
//     return(
//         <li>{isDone? 'Finished':'Work on'}: {task}</li>
//     )
//  }

// conditional rendering 4 
export default function Todo({task,isDone}){
    return(
        <li>{task} {isDone && ':Done'}</li>
    )
 }