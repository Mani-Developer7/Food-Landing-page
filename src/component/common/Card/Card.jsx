import './Card.css'

const Card = ({ data }) => {
  console.log(data);
  return (
    
    <div className="card-wrapper">
      <h1>{data.title}</h1>
      <img src={data.img} alt="" />
      <p>{data.subTitle}</p>
      <h2> Learn More</h2>
      
    </div>
  )
}

export default Card