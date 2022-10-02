const Image = ({ imageSrc, altImg, caption, classNameImg }) => {
    return(<>
        <image className={classNameImg} src={imageSrc} alt={altImg}></image>
        <p>{caption}</p>
    </>)
}

export default Image;
