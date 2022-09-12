import StickPosition from "../../../interfaces/stick-location";

const MAXIMAL_FLICK_VALUE = (2 << 16) - 1;

function getStickFlickLocation(stickPosition: StickPosition) {
    const maxIntensity = stickPosition.intensity / MAXIMAL_FLICK_VALUE * 100;
    const xPosition = maxIntensity * Math.cos(stickPosition.angle * Math.PI / 180);
    const yPosition = maxIntensity * Math.sin(stickPosition.angle * Math.PI / 180);

    return `${xPosition};${yPosition}`;
};

export default getStickFlickLocation;
