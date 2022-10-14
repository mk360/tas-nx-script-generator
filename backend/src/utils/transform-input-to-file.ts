import FrameInput from "../../../interfaces/frame-input";
import transformInputs from "./transform-single-input";

function transformInputToFile(inputs: FrameInput) {
    return transformInputs(inputs);
};

export default transformInputToFile;
