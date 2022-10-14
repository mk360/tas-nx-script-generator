import FrameInput from "../../../interfaces/frame-input";
import getStickFlickLocation from "./get-stick-flick-position";

function transformInputs(input: FrameInput) {
    const inputArray: (string | number)[] = [];

    for (let frame in input) {
        inputArray.push(frame);
        const frameData = input[frame];
        inputArray.push(frameData.buttons.join(';'));
        inputArray.push(getStickFlickLocation(frameData.leftStick));
        inputArray.push(getStickFlickLocation(frameData.rightStick));
    }

    return inputArray.join(' ');
};

export default transformInputs;
