interface PortalBoxProps {
  onClickHandler?: () => void
  opaque?: boolean
}

const PortalBox: React.FC<PortalBoxProps> = ({
  onClickHandler,
  opaque,
  ...props
}) => {
  return (
    <mesh onClick={onClickHandler} {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={'hotpink'}
        opacity={opaque ? 1 : 0}
        transparent={opaque ? false : true}
      />
    </mesh>
  )
}

export default PortalBox
