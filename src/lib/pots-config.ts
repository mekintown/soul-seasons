// config/potConfig.ts
import potOrange from '../img/icons/pot/potOrange.png';
import potPurple from '../img/icons/pot/potPurple.png';
import potGreen from '../img/icons/pot/potGreen.png';
import potRed from '../img/icons/pot/potRed.png';
import potPink from '../img/icons/pot/potPink.png';
import potYellow from '../img/icons/pot/potYellow.png';
import potBlue from '../img/icons/pot/potBlue.png';
import potIndigo from '../img/icons/pot/potIndigo.png';

// Glow pots
import potIndigoGlow from '../img/icons/potGlow/potIndigoGlow.png';
import potPurpleGlow from '../img/icons/potGlow/potPurpleGlow.png';
import potOrangeGlow from '../img/icons/potGlow/potOrangeGlow.png';
import potRedGlow from '../img/icons/potGlow/potRedGlow.png';
import potGreenGlow from '../img/icons/potGlow/potGreenGlow.png';
import potYellowGlow from '../img/icons/potGlow/potYellowGlow.png';
import potBlueGlow from '../img/icons/potGlow/potBlueGlow.png';
import potPinkGlow from '../img/icons/potGlow/potPinkGlow.png';


// Define pot configuration
export const potImagesLeft = [
    { src: potPink.src, label: "Career/Work", glow: potPinkGlow.src },
    { src: potIndigo.src, label: "Family", glow: potIndigoGlow.src },
    { src: potRed.src, label: "Relationship/Friends", glow: potRedGlow.src },
    { src: potOrange.src, label: "Sharing/Contributions", glow: potOrangeGlow.src },
];

export const potImagesRight = [
    { src: potBlue.src, label: "Self-Development", glow: potBlueGlow.src },
    { src: potYellow.src, label: "Finance/Money", glow: potYellowGlow.src },
    { src: potGreen.src, label: "Health", glow: potGreenGlow.src },
    { src: potPurple.src, label: "Spiritual", glow: potPurpleGlow.src },
];