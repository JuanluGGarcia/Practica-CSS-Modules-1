import style from './testCard.module.css'

const TestCard = (props) => {
    
    return (
        // <div className={style.testing__Container}>
            
            <div className={`${style.testing__Container} ${style[props.bgColor]}`}>
                <div className={style.test}>
                    <img className={style.test__image} src={props.path} alt="icon" />
                    <p className={`${style.test} ${style[props.color]}`}>{props.test}</p>              
                </div>
                <p>{props.punctuation}<span className={style.test__punctuation}> / 100</span></p>
            </div>
        // </div>
    );
};
export default TestCard;