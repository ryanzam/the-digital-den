import useProductStore from '../store/ndex'
import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import { Phone } from './models/Phone';
import { Laptop } from './models/Laptop';
import { Pc } from './models/Pc';
import { Smartwatch } from './models/Smartwatch';
import { Vr } from './models/Vr';

const Products = () => {

    const [selectedModel, setSelectedModel] = useState('Phone');

    const handleModelSwitch = (model) => {
        setSelectedModel(model);
    }

    return (
        <section id="products">
            <h2>Check out our products</h2>

            <div className='buttons'>
                <button className={`${selectedModel === "Phone" && "active"}`} onClick={() => handleModelSwitch('Phone')}>
                    <span>Phone</span>
                </button>
                <button className={`${selectedModel === "Laptop" && "active"}`} onClick={() => handleModelSwitch('Laptop')}>
                    <span>Laptop</span>
                </button>
                <button className={`${selectedModel === "Pc" && "active"}`} onClick={() => handleModelSwitch('Pc')}>
                    <span>PC</span>
                </button>
                <button className={`${selectedModel === "Smartwatch" && "active"}`} onClick={() => handleModelSwitch('Smartwatch')}>
                    <span>Wearables</span>
                </button>
                <button className={`${selectedModel === "Vr" && "active"}`} onClick={() => handleModelSwitch('Vr')}>
                    <span>VR</span>
                </button>
            </div>

            <Canvas camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }} style={{ height: "70vh" }}>
                <Environment preset="warehouse" />
                <ContactShadows position={[0, -0.8, 0]} color="#ffffff" />
                <OrbitControls />

                {selectedModel === 'Phone' && <Phone position={[0, -1, 0]} scale={1} />}
                {selectedModel === 'Laptop' && <Laptop position={[0, -1, 0]} scale={20} />}
                {selectedModel === 'Pc' && <Pc position={[0, -1, 0]} scale={0.2} />}
                {selectedModel === 'Smartwatch' && <Smartwatch position={[0, -1, 0]} scale={10} />}
                {selectedModel === 'Vr' && <Vr position={[0, 1, 0]} scale={0.3} />}
            </Canvas>
        </section>
    );
}

export default Products