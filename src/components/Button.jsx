

function Button({children, color, bgColor, onClick}) {
  return (
    <button style={{color: color, backgroundColor: bgColor}} onClick={onClick}>{children}</button>
  )
}
export default Button;