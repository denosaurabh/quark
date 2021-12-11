interface PortalBoxProps {
  onClickHandler?: () => void
}

const PortalBox: React.FC<PortalBoxProps> = ({ onClickHandler, ...props }) => {
  return (
    <mesh
      onClick={onClickHandler}
      {...props}
      material-opacity={0}
      material-transparent={true}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'hotpink'} />
    </mesh>
  )
}

export default PortalBox
