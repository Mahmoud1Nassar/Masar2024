import React from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import card1 from '../../images/card1.jpg';
import card2 from '../../images/card2.jpg';

function SuccessfulStories() {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
        
        <MDBCard style={{ maxWidth: '540px', flex: '1', marginLeft: '40px' }}>
          <MDBRow className='g-0'>
            <MDBCol md='5'>
              <MDBCardImage src={card1} alt='...' fluid style={{ width: '100%', height: '300px', margin: '8px', marginTop: '12px' }} />
            </MDBCol>
            <MDBCol md='7'>
              <MDBCardBody>
                <MDBCardTitle>Shadow Story</MDBCardTitle>
                <MDBCardText>
                  Samantha, grieving the loss of her previous cat, hesitated to open her heart again.
                  Browsing "Kitty Corner," she found Shadow, a timid feline. Connecting with the cat owner,
                  she decided to meet him. With patience and love, Shadow blossomed into a confident,
                  loving companion. Samantha and Shadow healed together,
                  finding comfort and joy in each other's presence.
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>

        <MDBCard style={{ maxWidth: '540px', flex: '1', marginLeft: '20px', marginRight: '50px' }}>
          <MDBRow className='g-0'>
            <MDBCol md='5'>
              <MDBCardImage src={card2} alt='...' fluid style={{ width: '100%', height: '300px', margin: '8px', marginTop: '12px' }} />
            </MDBCol>
            <MDBCol md='7'>
              <MDBCardBody>
                <MDBCardTitle>Luna Story</MDBCardTitle>
                <MDBCardText>
                  Ella, new to the city and feeling lonely,
                  discovered "Kitty Corner" and saw Luna, a playful kitten.
                  She decided to connect with the cat owner to meet her.
                  Taking Luna home, Ella's apartment filled with laughter and warmth,
                  and Luna's energy turned her new city into a home.
                  They lived happily ever after,
                  creating joyful memories together.
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
</div>
<div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>

        <MDBCard style={{ maxWidth: '540px', flex: '1', marginLeft: '40px', marginRight: '40px' }}>
          <MDBRow className='g-0'>
            <MDBCol md='5'>
              <MDBCardImage src='https://th.bing.com/th/id/OIP.vS8yMLv4vOZwqEMHGucrUwHaE8?rs=1&pid=ImgDetMain' alt='...' fluid style={{ width: '100%', height: '290px', margin: '8px', marginTop: '12px' }} />
            </MDBCol>
            <MDBCol md='7'>
              <MDBCardBody>
                <MDBCardTitle>Bella Story</MDBCardTitle>
                <MDBCardText>
                Mia's cat, Whiskers, was lonely after the loss of her other cat. 
                Browsing "Kitty Corner," Mia found Bella, a friendly calico. 
                After adopting her, Bella's warm demeanor quickly won Whiskers over. 
                The two cats became fast friends, playing and cuddling together. Mia's home was filled with joy again as Whiskers and Bella thrived, forming a happy cat family.
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
        <MDBCard style={{ maxWidth: '540px', flex: '1', marginLeft: '20px', marginRight: '50px' }}>
          <MDBRow className='g-0'>
            <MDBCol md='5'>
              <MDBCardImage src='https://www.dr-clauder.com/media/79/60/d2/1672319581/schwaches-immunsystem-katze.jpeg' alt='...' fluid style={{ width: '100%', height: '290px', margin: '8px', marginTop: '12px' }} />
            </MDBCol>
            <MDBCol md='7'>
              <MDBCardBody>
                <MDBCardTitle>Leo Story</MDBCardTitle>
                <MDBCardText>
                Michael, a retired man looking for a furry friend to keep him company, 
                  found Leo at "Kitty Corner." 
                  Leo, a gentle and affectionate cat, quickly won Michael's heart 
                  with his calm demeanor and loving nature. 
                  Together, Michael and Leo enjoyed peaceful days and quiet evenings, 
                  forming a deep and lasting bond that brought them both comfort and happiness.
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </div>
    </>
  );
}

export default SuccessfulStories;
