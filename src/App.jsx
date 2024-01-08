// import Data from "./components/data/Data";
import { v4 } from "uuid";
// import Data from "./components/data/Data";
import Results from "./components/results/Results";
import TestCard from "./components/testCard/TestCard";
import { cardInfo } from "./constants/cardInfo";
// import TestCard from "./components/testCard/TestCard";
// import TestCard from "./components/testCard/TestCard";
// import { cardInfo } from "./constants/cardInfo";

const App = () => {
	return (
		<div className="wrapper">	
			{/* hero para darle un padding al contenido de la web y el fondo que llege de lado a lado */}
			<div className="hero">
				{/* container para darle un ancho, ancho maximo a la web y centrar el texto */}
				<div className="container">
					<section className="results__container">
						<Results result={76}/>
					</section>		
				</div>
			</div>
			{/* <div className="container"> */}
			<section className="data__container">
				<p className="summary">Summary</p>

				{/* Rellenando componentes con bucles y key */}

				{
					cardInfo.map(card => (
						<TestCard
							key={v4()}
							color={card.color}
							bgColor={card.bgColor}
							path={card.path}
							test={card.test}
							punctuation={card.punctuation}
						/>
					))
				}
				
				{/* <TestCard color="red" bgColor="bg__red" path="./assets/images/icon-reaction.svg" test="Reaction" punctuation={85}/>
				<TestCard color="yellow" bgColor="bg__yellow" path="./assets/images/icon-memory.svg" test="Memory" punctuation={80}/>
				<TestCard color="green" bgColor="bg__green" path="./assets/images/icon-verbal.svg" test="Verbal" punctuation={61}/>
				<TestCard color="blue" bgColor="bg__blue" path="./assets/images/icon-visual.svg" test="Visual" punctuation={73}/> */}
				
				<button className="button">Continue</button>

			</section>
			
		</div>		
	);
};

export default App;
