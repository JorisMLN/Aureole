import './capsule.scss';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import SubCapsule from '../subCapsule/SubCapsule';
import Test from '../testComponent/TestComponent';

const Capsule = () => {
  return (
    <>
      <div className='capsule'>
        <Header />

        <SubCapsule child={<Test />}/>
        <SubCapsule child={<Test />}/>
        <SubCapsule child={<Test />}/>
        <SubCapsule child={<Test />}/>

        <Footer />
      </div>
    </>
  );
}

export default Capsule;