import TestCard from '../testCard/TestCard';
import style from './data.module.css'

const Data = () => {
    return (
        <>
            <p className={style.summary}>Summary</p>

			<TestCard />
			<TestCard />
			<TestCard />
			<TestCard />

            <button className={style.button}>Continue</button>

            
        </>
    );  
};

export default Data;