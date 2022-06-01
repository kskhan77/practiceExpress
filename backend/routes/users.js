import express from 'express';
import {
    nanoid
} from 'nanoid'

const router = express.Router();
const users = [{

        firstName: "Shazain",
        lastName: "khurram",
        age: 5
    },
    {
        firstName: "zaynah",
        lastName: "khurram",
        age: 3
    }

]

router.get('/', (req, res) => {
    console.log(users);
    res.send(users)
})

router.post('/', (req, res) => {
    const user = req.body
    // const userId=nanoid();
    // console.log(userId)
    // const userWithId ={...user, id: userId} // created userwithid object with spread user to add the ids to pervious user too  
    users.push({
        ...user,
        id: nanoid()
    })
    //  const userWithId= 
    // console.log('POST ROUTE REACHED')
    res.send(`user with the name ${user.firstName} added successfully`)
})

router.get('/:id', (req, res) => {
    res.send( req.params )

})

export default router;