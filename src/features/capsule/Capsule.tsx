import './capsule.scss';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import SubCapsule from '../subCapsule/SubCapsule';
import ContentOne from '../testComponent/contentOne';
import ContentTwo from '../testComponent/contentTwo';
import ContentThree from '../testComponent/contentThree';
import ContentFour from '../testComponent/contentFour';

const Capsule = () => {
  return (
    <>
      <div className='capsule'>
        <Header />

        <SubCapsule child={<ContentOne />}/>
        <SubCapsule child={<ContentTwo />}/>
        <SubCapsule child={<ContentThree />}/>
        <SubCapsule child={<ContentFour />}/>

        <Footer />
      </div>
    </>
  );
}

export default Capsule;