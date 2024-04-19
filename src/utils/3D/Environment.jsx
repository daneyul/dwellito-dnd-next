import { AccumulativeShadows, RandomizedLight, Environment as EnvironmentImpl } from '@react-three/drei'

const Environment = ({ direction = [5, 5, 5] }) => (
  <>
    <directionalLight position={direction} intensity={0.1} shadow-mapSize={1024} castShadow />
    <directionalLight position={[-5, 5, 5]} intensity={0.1} shadow-mapSize={128} castShadow />
    <directionalLight position={[-5, 5, -5]} intensity={0.1} shadow-mapSize={128} castShadow />
    <directionalLight position={[0, 5, 0]} intensity={0.1} shadow-mapSize={128} castShadow />
    <AccumulativeShadows frames={100} alphaTest={0.2} opacity={0.5} scale={30} position={[0, 0, 0]}>
      <RandomizedLight amount={8} radius={2.5} ambient={0.5} intensity={1} position={direction} bias={0.001} />
    </AccumulativeShadows>
    <EnvironmentImpl preset="city" />
  </>
)

export default Environment;