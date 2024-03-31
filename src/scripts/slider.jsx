

function Slider({ children }) {
    let sectionIndex = 0;

    function changeSlide(index) {
        const buttons = document.querySelectorAll('.indicator');
        const sections = document.querySelectorAll('.slider section');
        const numSlides = children.length;

        console.log('change');

        sectionIndex = (index >= numSlides ? 0 : index < 0 ? numSlides - 1 : index);

        buttons.forEach((btn, i) => {
            btn.classList.remove('active');
            sections[i].classList.remove('active');
            if (i === sectionIndex) {
                btn.classList.add('active');
                sections[i].classList.add('active');
            }
        });
    }

    function handleNextClick() {
        changeSlide(sectionIndex + 1);
    }

    function handlePrevClick() {
        changeSlide(sectionIndex - 1);
    }

    function createIndicators() {
        return children.map((element, index) => (
            <div className="clickArea" onClick={() => changeSlide(index)}>
                <button
                    key={index}
                    className={index === sectionIndex ? 'indicator active' : 'indicator'}
                //onClick={() => changeSlide(index)}
                ></button>
            </div>
        ));
    }

    return (
        <div className='container'>
            <div className='carousel'>
                <div className="slider">
                    {children}
                </div>
                <div className="controls">
                    <div className="clickArea prev" onClick={handlePrevClick}>
                        <button/>
                    </div>
                    <div className="clickArea next" onClick={handleNextClick}>
                        <button/>
                    </div>
                    <div className="indicators">
                        {createIndicators()}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;