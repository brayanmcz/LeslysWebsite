import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol, MDBRow, MDBContainer, MDBIcon } from 'mdbreact';
import styled from 'styled-components';

const Wrapper = styled.div`
	margin-top: 20px;
	.card-top {
		height: 100px;
		width: 100%;
		background-color: #00bcd4;
	}

	.card-image {
		height: 100px;
		width: 100px;
		margin-top: -50px;
		border: 5px solid white;
	}

	.circle {
		height: 50px;
		width: 50px;
		border-radius: 50%;
	}

	.icon-container {
		padding: 10px;
		paddin-left: 25px;
	}

	a {
		color: black;
	}

	a:hover {
		color: #00bcd4;
	}

	a:link {
		color: red;
	}

	a:visited {
	}

	.flex-container {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		padding-top: 30px;
	}

	.flex-center {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.small {
		font-size: 70%;
	}
`;

class AboutPage extends Component {
	render() {
		return (
			<Wrapper>
				<MDBContainer>
					<MDBRow>
						<MDBCol sm="6" md="4" lg="3">
							<MDBCard>
								<div className="card-top" />
								<MDBCol>
									<img
										src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/50887240_2102607223166381_2391216904539734016_n.jpg?_nc_cat=109&_nc_oc=AQl5BlRa1mBdhfmmFtvYfQ4hUGroBSsDfmgtKXMf-SXO5Oa05sPrqpk7eZQDM0SCxUDrJvDcyy8tvt3PUDip7wwV&_nc_ht=scontent-sjc3-1.xx&oh=ef1782873d28740e5853b5ad4f1ff8a6&oe=5CE76F58"
										className="rounded-circle mx-auto d-block card-image"
										alt="aligment"
									/>
								</MDBCol>
								<MDBCardBody>
									<MDBCardTitle className="text-center">Lesly Castro</MDBCardTitle>
									<div>
										<div className="flex-center">
											<MDBIcon icon="quote-left" className="pr-2" />
											<p className="small">Life is what you Bake it!</p>
											<MDBIcon icon="quote-right" className="pl-2" />
										</div>
									</div>
									<div className="flex-container">
										<div className="icon-container">
											<a href="https://google.com" target="__blank">
												<MDBIcon fab className="social-icon" icon="instagram " size="1x" />
											</a>
										</div>
										<div className="icon-container">
											<a href="https://google.com" target="__blank">
												<MDBIcon fab className="social-icon" icon="facebook-f" size="1x" />
											</a>
										</div>
										<div className="icon-container">
											<a href="https://google.com" target="__blank">
												<MDBIcon fab className="social-icon" icon="twitter" size="1x" />
											</a>
										</div>
									</div>
								</MDBCardBody>
							</MDBCard>
						</MDBCol>
						<MDBCol sm="6">
							<MDBCard>
								<MDBCardBody>
									<MDBCardTitle><em>Hi, thanks for being here!</em></MDBCardTitle>
									<MDBCardText>	
									This is a test.
									</MDBCardText>																					
								</MDBCardBody>
							</MDBCard>
						</MDBCol>
					</MDBRow>
				</MDBContainer>
			</Wrapper>
		);
	}
}

export default AboutPage;
