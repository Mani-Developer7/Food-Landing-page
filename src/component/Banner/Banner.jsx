import './Banner.css'
import Button from '../common/Button/Button'

const Banner = ({data, isrotate}) => {
  const { title, subTitle, btnText, btnText1, btnText2, img } = data
    return (
      <div className={`Banner-wrapper ${isrotate && "isrotate"}`}>
        <div className="text-wrapper">
          <h1> {title} </h1>
          <p> {subTitle} </p> 
          <div className='btnBox'>
          {btnText ? <Button text={btnText} /> : null}
          {btnText1 ? <Button text={btnText1} isImage /> : null}
            {btnText1 ? <Button text={btnText2} isImage1 /> : null}

          </div>
        </div>

        <div className="img-wrapper">
          <img src={img} alt="" />
        </div>

      </div>
    )
  }

export default Banner
