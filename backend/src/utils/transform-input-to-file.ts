import FrameInput from "../../../interfaces/frame-input";
import transformSingleInput from "./transform-single-input";

function transformInputToFile(inputs: FrameInput[]) {
    const fileContent = inputs.map(transformSingleInput).join("\n");

    return fileContent;
};

export default transformInputToFile;
