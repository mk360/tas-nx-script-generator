import FrameInput from "../../../interfaces/frame-input";
import getStickFlickLocation from "./get-stick-flick-position";

function transformSingleInput(input: FrameInput) {
    let inputArray: (string | number)[] = [input.frame];
    inputArray.push(input.buttons.join(';'));
    inputArray.push(getStickFlickLocation(input.leftStick));
    inputArray.push(getStickFlickLocation(input.rightStick));

    return inputArray.join(' ');
};

export default transformSingleInput;
