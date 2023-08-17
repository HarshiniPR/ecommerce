import React from 'react'
import './Terms.css'
import Navbar from '../Navbar/Navbar'
const Terms = () => {
    return (
        <>
            <Navbar />
            <div style={{ padding: '2rem' }}>
                <h1 style={{
                    textAlign: 'center',
                    fontSize: '30px',
                    fontStyle: 'oblique',
                    fontWeight: 600,
                    marginTop: '4rem',
                    fontFamily: 'math'
                }}>Terms And Condition</h1>

                <h4 style={{
                    fontSize: '17px',
                    fontFamily: 'sans-serif',
                    marginTop: '20px',
                    fontWeight: 550,
                    textAlign: 'center',
                    wordSpacing: '5px',
                    letterSpacing: '2px',
                }}> These Terms And Conditions May Change:</h4>

                <p style={{
                    fontSize: '16px', // Note that font-size: 17px is overwritten by this line
                    marginTop: '40px',
                    wordSpacing: '8px',
                    fontFamily: 'system-ui',
                    fontWeight: 450,
                    // Add more CSS properties as needed
                }}> We reserve the right to update or modify these terms and conditions at any time without prior notice. For this reason, we encourage you to review these terms and conditions whenever you use this website.</p>

                <p style={{
                    marginTop: '40px',
                    fontSize: 'large',
                    fontFamily: 'sans-serif',
                    fontWeight: 550,
                    letterSpacing: '2px',
                    textAlign: 'justify',
                    // Add more CSS properties as needed
                }}>
                    <th>Copyright and Trademark:</th> <br />
                    <p style={{
                        textIndent: '280px',
                        marginTop: '-15px',
                        letterSpacing: '2px',
                        wordSpacing: '5px',
                        fontSize: '17px',
                        fontFamily: 'math',
                        fontWeight: 500,
                        // Add more CSS properties as needed
                    }}>Unless otherwise indicated, material on this website, including but not limited to texts, images, illustrations, software, audio clips, video clips, animation files, is subject to the copyright and trademark rights of The PerlBlossom.PVT.LTD.
                        Consequently, the material on this website may not be copied, reproduced, modified, posted, transmitted, distributed, in whole or in part in any form whatsoever, without the prior written consent of The PerlBlossom.PVT.LTD. <b> All rights reserved.</b></p>
                </p>

                <p style={{
                    marginTop: '40px',
                    fontSize: 'large',
                    fontFamily: 'sans-serif',
                    fontWeight: 550,
                    letterSpacing: '2px',
                    textAlign: 'justify',
                    // Add more CSS properties as needed
                }}>
                    <th>Shipping Limitations:</th> <br />
                    <p style={{
                        textIndent: '235px',
                        marginTop: '-15px',
                        letterSpacing: '2px',
                        wordSpacing: '5px',
                        fontSize: '17px',
                        fontFamily: 'math',
                        fontWeight: 500,
                        // Add more CSS properties as needed
                    }}>When an order is placed, it will be shipped to an address designated by the purchaser as long as that shipping address is compliant with the shipping restrictions contained on this website. All purchases from this website are made pursuant
                        to a shipment contract. As a result, risk of loss and title for items purchased from this website pass to you upon delivery of the items to the carrier. You are responsible for filing any claims with carriers for damaged and/or lost shipments.</p>
                </p>

                <p style={{
                    marginTop: '40px',
                    fontSize: 'large',
                    fontFamily: 'sans-serif',
                    fontWeight: 550,
                    letterSpacing: '2px',
                    textAlign: 'justify',
                    // Add more CSS properties as needed
                }}>
                    <th>Duties and Taxes:</th> <br />
                    <p style={{
                        textIndent: '197px',
                        marginTop: '-15px',
                        letterSpacing: '2px',
                        wordSpacing: '5px',
                        fontSize: '17px',
                        fontFamily: 'math',
                        fontWeight: 500,
                        // Add more CSS properties as needed
                    }}>You are responsible for duties and taxes outside Singapore. All items entering a foreign country are subject to customs inspection and assessment of the duties and taxes in accordance with that country’s national laws.</p>
                </p>

                <p style={{
                    marginTop: '40px',
                    fontSize: 'large',
                    fontFamily: 'sans-serif',
                    fontWeight: 550,
                    letterSpacing: '2px',
                    textAlign: 'justify',
                    // Add more CSS properties as needed
                }}>
                    <th>Your Account:</th> <br />
                    <p style={{
                        textIndent: '155px',
                        marginTop: '-15px',
                        letterSpacing: '2px',
                        wordSpacing: '5px',
                        fontSize: '17px',
                        fontFamily: 'math',
                        fontWeight: 500,
                        // Add more CSS properties as needed
                    }}>You are responsible for maintaining the confidentiality of your account and password information, and you agree to accept responsibility for all activities that occur under your account and password. This website and The PerlBlossom.PVT.LTD
                        <b>reserves
                            the right</b> to refuse service, terminate accounts remove or edit content or cancel orders.By placing an order, you warrant that you are over 18 years of age, and that you are providing perl.blossom.com. with accurate,
                        truthful information and that you have the authority to place the order.</p>
                </p>




            </div>
        </>
    )
}

export default Terms