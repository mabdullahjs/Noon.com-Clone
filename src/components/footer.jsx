import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';
import "./footer.css"

function Footer() {
  return (
    <MDBFooter style={{backgroundColor:"#ffffff"}} className='text-start text-lg-left'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>ELECTRONICS</h5>

            <ul className='list-unstyled mb-0 mt-4'>
              <li>
                <a href='#!' className='text-dark text-decoration-none'>
                Mobiles
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark text-decoration-none'>
                Tablets
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark text-decoration-none'>
                Laptops
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark text-decoration-none'>
                Home Appliances
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark text-decoration-none'>
                Camera, Photo & Video
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark text-decoration-none'>
                Televisions
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark text-decoration-none'>
                Headphones
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark text-decoration-none'>
                Video Games
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>FASHION</h5>

            <ul className='list-unstyled mt-4'>
              <li>
                <a href='#!' className='text-dark text-decoration-none'>
                Women's Fashion
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark text-decoration-none'>
                Men's Fashion
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark text-decoration-none'>
                Girls' Fashion
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark text-decoration-none'>
                Boys' Fashion
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark text-decoration-none'>
                Watches
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark text-decoration-none'>
                Jewellery
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark text-decoration-none'>
                Women's Handbags
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark text-decoration-none'>
                Men's Eyewear
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>HOME AND KITCHEN</h5>

            <ul className='list-unstyled mb-0 mt-4'>
              <li>
                <a href='#!' className='text-dark text-decoration-none'>
                Bath
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark text-decoration-none'>
                Home Decor
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark text-decoration-none'>
                Kitchen & Dining
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark text-decoration-none'>
                Tools & Home Improvement
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark text-decoration-none'>
                Audio & Video
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark text-decoration-none'>
                Furniture
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark text-decoration-none'>
                Patio, Lawn & Garden
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark text-decoration-none'>
                Pet Supplies
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0 '>BEAUTY</h5>

            <ul className='list-unstyled mt-4'>
              <li>
                <a href='#!' className='text-dark text-decoration-none'>
                Fragrance
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark text-decoration-none'>
                Make-Up
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark text-decoration-none'>
                Haircare
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark text-decoration-none'>
                Skincare
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark text-decoration-none'>
                Bath & Body
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark text-decoration-none'>
                Men's Grooming
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark text-decoration-none'>
                Health Care Essentials
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark text-decoration-none'>
                Electronic Beauty Tools
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3 d-flex justify-content-between' style={{ backgroundColor: '#f7f7fa' }}>
        <div>
        <p>© 2023 noon. All Rights Reserved</p>
        </div>
        <div>
            <img style={{width:"3rem" , marginLeft:"1rem"}} src="https://z.nooncdn.com/s/app/com/noon/images/mastercard-color.svg" alt="" />
            <img style={{width:"3rem" , marginLeft:"1rem"}} src="https://z.nooncdn.com/s/app/com/noon/images/visa-color-v2.png" alt="" />
            <img style={{width:"3rem" , marginLeft:"1rem"}} src="https://z.nooncdn.com/s/app/com/noon/images/cash-color.svg" alt="" />
            <img style={{width:"3rem" , marginLeft:"1rem"}} src="https://z.nooncdn.com/s/app/com/noon/images/amex-color.svg" alt="" />
        </div>
        <div id='none' className='pb-5'>
            <a className='text-decoration-none text-dark ' href="/">Careers</a>
            <a className='text-decoration-none text-dark p-1' href="/">Warranty Policy</a>
            <a className='text-decoration-none text-dark p-1' href="/">Sell with Us</a>
            <a className='text-decoration-none text-dark p-1' href="/">Term of Use</a>
            <a className='text-decoration-none text-dark p-1' href="/">Terms of Sales</a>
            <a className='text-decoration-none text-dark p-1' href="/">Privacy Policy</a>
            <a className='text-decoration-none text-dark p-1' href="/">Consumer Policy</a>
        </div>
      </div>
    </MDBFooter>
  );
}
export default Footer