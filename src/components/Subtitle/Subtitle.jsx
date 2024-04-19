import style from "./subtitle.module.scss";

const Subtitle = ({ text, css }) => {
  return (
    <div className={style.subtitle} style={css}>{text}</div>
  )
}

export default Subtitle;