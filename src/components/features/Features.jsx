import "./features.scss"

function Features({ title, description, imgSrc, alt }) {
    return (
        <div className="feature-item">
            <img className="feature-icon"
                src={imgSrc}
                alt={alt}
            />
            <h3 className="feature-item-title">{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default Features