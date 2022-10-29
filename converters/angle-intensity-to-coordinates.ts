import StickCoordinates from "../interfaces/stick-coordinates";

function AngleIntensityToCoordinates({ angle, intensity, maxWidth, maxHeight }: { angle: number; intensity: number, maxWidth: number; maxHeight: number }): StickCoordinates {
    const horizontalIntensity = intensity / maxWidth;
    const verticalIntensity = intensity / maxHeight;
    const xPos = Math.cos(angle) * horizontalIntensity;
    const yPos = Math.sin(angle) * verticalIntensity;
    
    return {
        x: xPos,
        y: yPos,
    };
};

export default AngleIntensityToCoordinates;
