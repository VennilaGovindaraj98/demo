Redux : 
   yarn add redux redux-thunk nexwrappert-redux- react-redux
   npm install redux react-redux


   npm install redux react-redux next-redux-wrapper



import { buyCake  , addCake ,reset} from '@/component/rtk-demo/features/cakeSlice'
import {useSelector , useDispatch} from 'react-redux'
import {useState} from 'react'
import Title from '@/component/atoms/Title/Title'
import Input from '@/component/atoms/Input/Input'
import Button from '@/component/atoms/button/button'
// import Title from '@/component/atoms/Title'
// console.log(buyCake , 'hehehe to test')
interface CakeParams {
  cake: {
    numOfCakes: number
  }
}

function cake () {
  const cake = useSelector((state: CakeParams) => state.cake.numOfCakes)
  const dispatch = useDispatch()
  const [addCakeValue , setAddCake] = useState(1)
  const [buyCakeValue , setBuyCake] = useState(1)



   return (<div>
        {/* <p className="cakes-info"> Number of cakes {cake}</p> */}
        <Title className = "cakes-info"title = {`Number of cakes ${cake}`} ></Title>
        <div className='cake_wrapper'>
        {/* <Input type = "text"  value= {addCakeValue || ''}  onChange = {(e :any) => setAddCake(parseInt(e.target.value) || addCakeValue)}></Input> */} */}
         <input type='text' value={addCakeValue || ''} onChange={(e) => setAddCake(parseInt(e.target.value) || addCakeValue)}/>
        {/* <Button className = "cake_but" buttonText="Buy cake" ></Button> */}
        <button onClick={()=> dispatch(buyCake(addCakeValue))} className = "cake-but">Buy cake</button>
        
        </div>
        <br></br>
        <div className='cake_wrapper'>
        <input type='text' value = {buyCakeValue || ''} onChange={(e) => setBuyCake(parseInt(e.target.value) || addCakeValue)} > 
        </input>
        <button onClick={()=> dispatch(addCake(buyCakeValue))} className = "cake-but">Add cake</button>
        </div>
        {/* <div className='cake_wrapper'> 
        <button onClick={()=> dispatch(reset())} className = "cake-but">Reset</button>
        </div> */}
   </div>)
}

export default cake


import { buyCake  , addCake ,reset} from '@/component/rtk-demo/features/cakeSlice'
import {useSelector , useDispatch} from 'react-redux'
import {useState} from 'react'
import Title from '@/component/atoms/Title/Title'
import Input from '@/component/atoms/Input/Input'
import Button from '@/component/atoms/button/Button'
// console.log(buyCake , 'hehehe to test')
interface CakeParams {
  cake: {
    numOfCakes: number
  }
}

function cake () {
  const cake = useSelector((state: CakeParams) => state.cake.numOfCakes)
  const dispatch = useDispatch()
  const [addCakeValue , setAddCake] = useState(1)
  const [buyCakeValue , setBuyCake] = useState(1)



   return (<div>
        {/* <p className="cakes-info"> Number of cakes {cake}</p> */}
        <Title className = "cakes-info" title= {`Number of cakes ${cake}`} ></Title>
        <div className='cake_wrapper'>
        <Input type = "text"  value= {addCakeValue || ''}  onChange = {(e :any) => setAddCake(parseInt(e.target.value) || addCakeValue)}></Input>  
        {/* <input type='text' onChange={(e) => setAddCake(parseInt(e.target.value) || addCakeValue)} > 
        </input> */}
        <Button className='cake-but'  buttonText="Buy cake"  onClick={()=> dispatch(buyCake(addCakeValue))}></Button>
        {/* <button onClick={()=> dispatch(buyCake(addCakeValue))} className = "cake-but">Buy cake</button> */}
        </div>
        <br></br>
        <div className='cake_wrapper'>
        <Input type = "text"  value= {addCakeValue || ''}  onChange = {(e :React.ChangeEvent<HTMLInputElement>) => setBuyCake(parseInt(e.target.value) || addCakeValue)}></Input>  

        {/* <input type='text' value = {buyCakeValue || ''} onChange={(e) => setBuyCake(parseInt(e.target.value) || addCakeValue)} > 
        </input> */}
         <Button className='cake-but'  buttonText="Add cake"  onClick={()=> dispatch(addCake(buyCakeValue))}></Button>
        {/* <button onClick={()=> dispatch(addCake(buyCakeValue))} className = "cake-but">Add cake</button> */}
        </div>
        {/* <div className='cake_wrapper'> 
        <button onClick={()=> dispatch(reset())} className = "cake-but">Reset</button>
        </div> */}
   </div>)
}

export default cake