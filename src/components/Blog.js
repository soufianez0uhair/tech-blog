export default function Blog(props) {
    return (
        <div className="blog">
                <img src={props.img} alt={'img by ' + props.author} />
                <div className="blog__details">
                   <h2>{props.title}</h2>
                   <p>{props.author}</p>
                </div>
                <div className="blog__overview">
                    <h2>Overview:</h2>
                    <p>{props.overview}</p>
                </div>
        </div>
    )
}