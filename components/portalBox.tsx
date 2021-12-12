interface PortalBoxProps {
  onClickHandler?: () => void
}

const PortalBox: React.FC<PortalBoxProps> = ({ onClickHandler, ...props }) => {
  return (
    <mesh
      onClick={onClickHandler}
      {...props}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'hotpink'} opacity={0} transparent={true} />
    </mesh>
  )
}

export default PortalBox
