import '../styles/crew.css';
import Crewcards from './crewcards';

function Crew(){
  return (
    <section className='crew'>

      <div className='crew-btncontainer'><button>Crew</button></div>

      <div className="crew-para-content">
        <p className='crew-heading'>Our team</p>
        <p className='crew-para'>Creative, inovative and results-driven </p>
      </div>
      <Crewcards />
    </section>
  );

}

export default Crew;