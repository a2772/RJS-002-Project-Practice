const ParallaxStyleOne = ({ classNameParallax, headerCont = "", captionCont = "" }) => {
    return(<>
        <section className={'parallax ' + classNameParallax}>
            <div>&nbsp;</div>
            <h2 className={'parallax-font ' + classNameParallax + '-header'}>
                {headerCont}
            </h2>
            <p className={'parallax-font ' + classNameParallax + '-caption'}>
                {captionCont}
            </p>
        </section>
    </>)
}

export default ParallaxStyleOne
