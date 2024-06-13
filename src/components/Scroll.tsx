const Scroll = ({ data }: ScrollData) => {
  return (
    <div className="scroller_outer">
      <ul className="scroller_inner">
        {data.map((item) => (
          <li key={item.title} className="scroll-item p-5 rounded-md border">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            {item.image && <img src={item.image} />}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Scroll
