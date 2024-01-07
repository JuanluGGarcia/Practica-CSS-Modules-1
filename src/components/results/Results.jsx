import style from './results.module.css'

const Results = ({ result }) => {
    return (
        <>
            <p className={style.result__Your}>Your Result</p>
            <div className={style.result__Container}>
                <h1 className={style.result__Total}>{result}</h1> 
                <p className={style.result__Of}>of 100</p>
            </div>
            <h2 className={style['result__Total--Word']}>Great</h2>
            <p className={style.result__Explication}>Your performance exceed 65% of the people conducting the test here!</p>
        </>
    );
};
export default Results;