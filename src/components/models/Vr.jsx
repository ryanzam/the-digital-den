import { useGLTF } from '@react-three/drei'

export function Vr(props) {
    const { nodes, materials } = useGLTF('/models/vr_headset.glb')
    return (
        <group {...props} dispose={null}>
            <group scale={0.01}>
                <group position={[0, -146.538, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={49.381}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['������_����������������001_0'].geometry}
                        material={materials['.001']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['������_Material_0'].geometry}
                        material={materials.Material}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['������_����������������_0'].geometry}
                        material={materials.material}
                    />
                </group>
                <group position={[0, -79.5, 15.648]} scale={[116.962, 116.962, 25.613]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['��������������_����������������002_0'].geometry}
                        material={materials['.002']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['��������������_����������������_0'].geometry}
                        material={materials.material}
                    />
                </group>
                <group position={[0, 0, -197.588]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['������002_Material_0'].geometry}
                        material={materials.Material}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['������002_����������������001_0'].geometry}
                        material={materials['.001']}
                    />
                </group>
                <group position={[0, 0, -1095.608]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['������004_Material_0'].geometry}
                        material={materials.Material}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['������004_����������������002_0'].geometry}
                        material={materials['.002']}
                    />
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['������001_����������������003_0'].geometry}
                    material={materials['.003']}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['������003_Material_0'].geometry}
                    material={materials.Material}
                    position={[0, 0, -1240.772]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/vr_headset.glb')
