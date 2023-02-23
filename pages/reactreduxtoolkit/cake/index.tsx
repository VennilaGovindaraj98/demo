import {
  buyCake,
  addCake,
  reset,
} from "@/component/rtk-demo/features/cakeSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Title from "@/component/atoms/Title/Title";
// import buttonStyles from "@/component/atoms/button/button.module.css"
// import Input from "@/component/atoms/Input/Input";
// import Button from "@/component/atoms/button/Button";
import CakeInfo from "@/component/molecules/cakeInfo/CakeInfo";
import cakeInfoCss from "@/component/molecules/cakeInfo/CakeInfo.module.css"

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
  // console.log(cakeInfoCss.addCake)
  return (
    <div>
      <Title className="cakes-info" title={`Number of cakes ${cake}`}></Title>
      <div className="cake_wrapper">
        <CakeInfo
          inputType="text"
          inputValue={addCakeValue || ""}
          onChange={(e) => setAddCake(parseInt(e.target.value) || addCakeValue)}
          buttonclassName= {cakeInfoCss.addCake}
          buttonText="Add Cake"
          onClick={() => dispatch(addCake(addCakeValue))}
          bg="red"
        ></CakeInfo>
      </div>
      <br></br>
      <div className="cake_wrapper">
        <CakeInfo
          inputType="text"
          inputValue={buyCakeValue || ""}
          onChange={(e) => setBuyCake(parseInt(e.target.value) || buyCakeValue)}
          buttonText="Buy Cake"
          buttonclassName= {cakeInfoCss.buyCake}
          onClick={() => dispatch(buyCake(buyCakeValue))}
          bg="green"
        ></CakeInfo>
      </div>
    </div>
  );
}

export default cake;
