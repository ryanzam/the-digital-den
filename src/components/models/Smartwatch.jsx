import { useGLTF } from '@react-three/drei'

export function Smartwatch(props) {
    const { nodes, materials } = useGLTF('/models/smart_watch.glb')
    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={0.026}>
                <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                    <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.DISPLEY_Material001_0.geometry}
                            material={materials['Material.001']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube_Material013_0.geometry}
                            material={materials['Material.013']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube012_Material008_0.geometry}
                            material={materials['Material.008']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cylinder036_Material007_0.geometry}
                            material={materials['Material.007']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_Material009_0.geometry}
                            material={materials['Material.009']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object001_Material010_0.geometry}
                            material={materials['Material.010']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object001_Material011_0.geometry}
                            material={materials['Material.011']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object001_Material012_0.geometry}
                            material={materials['Material.012']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object002_Material014_0.geometry}
                            material={materials['Material.014']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object003_Material016_0.geometry}
                            material={materials['Material.016']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object004_Material015_0.geometry}
                            material={materials['Material.015']}
                        />
                    </group>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane_Material_0.geometry}
                        material={materials.Material}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    />
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/smart_watch.glb')

