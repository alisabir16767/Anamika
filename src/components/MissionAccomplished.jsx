import React, { useState } from 'react';
import './MissionAccomplished.css';
import Modal from './Modal'; // Import the Modal component
import TLCImage from '../assets/images/UTL.png';  
import ErisImage from '../assets/images/Eris.png';  
import PSAImage from '../assets/images/PSA.png';  
import OCImage from '../assets/images/OC.png';  
import CROWNImage from '../assets/images/CROWN.png';  
import QUANTUMImage from '../assets/images/QUANTUM.png';  
import SHALINAImage from '../assets/images/SHALINA.png';  
import MILANImage from '../assets/images/MILAN.png';  

const images = [
    { src: TLCImage, alt: "TLC" },
    { src: ErisImage, alt: "Eris" },
    { src: PSAImage, alt: "PSA" },
    { src: MILANImage, alt: "Milan" },
    { src: OCImage, alt: "OC" },
    { src: CROWNImage, alt: "Crown" },
    { src: QUANTUMImage, alt: "Quantum" },
    { src: SHALINAImage, alt: "Shalina" },
];

const MissionAccomplished = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedImage(null);
    };

    return (
        <div className="MissionAccomplished">
            <h1>MISSON... <span className='quality'>ACCOMPLISHED</span></h1>
            <p>"The Rate of your success depends on the depth of your desire"
                <br />
                <br />
                <i><b>~ Arpit Mishra</b></i>
            </p>
            <div className="MissionAccomplished-items">
                {images.map((image, index) => (
                    <div key={index} className="MissionAccomplished-pic" onClick={() => openModal(image.src)}>
                        <img src={image.src} alt={image.alt} />
                    </div>
                ))}
            </div>
            <Modal show={showModal} image={selectedImage} onClose={closeModal} />
        </div>
    );
}

export default MissionAccomplished;
