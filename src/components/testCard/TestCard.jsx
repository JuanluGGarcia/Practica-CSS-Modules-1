import style from './testCard.module.css'
// import styles from './testCard.module.css'

const TestCard = ({ path, test, punctuation }) => {
    return (
        <div className={style.testing__Container}>
            <div className={`${style.test} ${style.bg__red}`}>
                <img className={style.test__image} src={path} alt="icon" />
                <p className={`${style.test} ${style.red}`}>{test}</p>              
            </div>
            <p>{punctuation}<span className={style.test__punctuation}> / 100</span></p>
        </div>
    );
};
export default TestCard;