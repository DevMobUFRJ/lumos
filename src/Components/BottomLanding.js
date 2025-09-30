import bottomMainLogos from '../Assets/Images/bottomMainLogos.svg';

const BottomLanding = ({
    marginTop
}) => {
  return (
    <div className='bottom-landing-container'
         style={{marginTop: marginTop}}>
          <div id='bottom_logos'>
            <img src={bottomMainLogos}
                style={{ width: '100%'}}
                alt='Logos'/>
          </div>
    </div>

  );
};

export default BottomLanding;