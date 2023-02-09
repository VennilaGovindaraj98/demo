import {
  buyCake,
  addCake,
  reset,
} from "@/component/rtk-demo/features/cakeSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Title from "@/component/atoms/Title/Title";
import Input from "@/component/atoms/Input/Input";
import Button from "@/component/atoms/button/Button";
import CakeInfo from "@/component/molecules/cakeInfo";
// import CakeInfo from "@/component/molecules/cakeInfo";
// import CakeInfo from "@/component/molecules/cakeInfo";
// console.log(buyCake , 'hehehe to test')
interface CakeParams {
  cake: {
    numOfCakes: number;
  };
}

function cake() {
  const cake = useSelector((state: CakeParams) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  const [addCakeValue, setAddCake] = useState(1);
  const [buyCakeValue, setBuyCake] = useState(1);

  return (
    <div>
      <Title className="cakes-info" title={`Number of cakes ${cake}`}></Title>
      <div className="cake_wrapper">
         <CakeInfo inputType="text" 
           inputValue={addCakeValue || ""} 
           onChange ={(e) =>
            setAddCake(parseInt(e.target.value) || addCakeValue)  
          }  
          buttonclassName="cake-but" 
          buttonText="Buy cake" 
          onClick={() => dispatch(buyCake(addCakeValue))} 
          bg="green"></CakeInfo>
         
         
         
         
         {/* <CakeInfo inputType="text"
          inputValue={addCakeValue || ""} onChange ={(e) =>
            setAddCake(parseInt(e.target.value) || addCakeValue)
          }></CakeInfo> */}
        {/* <CakeInfo></CakeInfo> */}
        {/* <Input></Input>  */}
        {/* <Input
          type="text"
          value={addCakeValue || ""}
          onChange={(e) =>
            setAddCake(parseInt(e.target.value) || addCakeValue)
          }
        ></Input> */}
        {/* <Button
          className="cake-but"
          buttonText="Buy cake"
          onClick={() => dispatch(buyCake(addCakeValue))}
          bg="green"></Button> */}
      </div>
      <br></br>
      <div className="cake_wrapper">
        <Input
          type="text"
          value={addCakeValue || ""}
          onChange={(e) =>
            setBuyCake(parseInt(e.target.value) || addCakeValue)
          }
        ></Input>
        <Button
          className="cake-but"
          buttonText="Add cake"
          onClick={() => dispatch(addCake(buyCakeValue))}
          bg="red"
        ></Button>
      </div>
    </div>
  );
}

export default cake;
