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
		padding-left: 25px;
	}

	a {
		color: black;
	}

	a:hover {
		color: #00bcd4 !important;
	}

	a:link {
		color: black !important;
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

	.card{
		margin-bottom: 20px !important;
	}

	.bold {
		font-weight: bold;
		color:  #ff80ab;
	}
`;

class AboutPage extends Component {
	render() {
		return (
			<Wrapper>
				<MDBContainer>
					<MDBRow>
						<MDBCol sm="6" md="4" lg="3">
							<MDBCard className="here">
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
											<a href="https://www.instagram.com/ecz.lesly/" target="__blank">
												<MDBIcon fab className="social-icon" icon="instagram " size="1x" />
											</a>
										</div>
										<div className="icon-container">
											<a href="https://www.facebook.com/lesly.castro.779" target="__blank">
												<MDBIcon fab className="social-icon" icon="facebook-f" size="1x" />
											</a>
										</div>
										<div className="icon-container">
											<a href="https://twitter.com" target="__blank">
												<MDBIcon fab className="social-icon" icon="twitter" size="1x" />
											</a>
										</div>
									</div>
								</MDBCardBody>
							</MDBCard>
						</MDBCol>
						<MDBCol sm="6" md="8" lg="9">
							<MDBCard>
								<MDBCardBody>
									<br/>
									<MDBCardTitle className="text-center"><em className="bold">About Me</em></MDBCardTitle>
									<MDBCardText>	
									<br/>
									<br/>
									<p>
										So you want to find out a little bit more about me, huh? Who is this young lady and should I trust her
										with making pastries for me? Can she bake? Can she decorate? Okay, let's get started! I'm Lesly a chef-in-training
										from ag-town Modesto, California. I'm in my early 20's, a lover of dogs, miniature things, good old printed
										photos, and Naruto.
									</p>
									<p>
										I started this website to share my work and love for all things food, cooking, and baking. I'm the kind of 
										person who loves putting plenty of time, heart, and soul into her work and putting it out for display.
									</p>
									<p>
										Im no chef. At least not yet! I have some formal training, but lots of trial and error practice. I make mistakes
										and I learn from them. With each mistake I work to perfect my craft.
									</p>
									<p>
										I'm working on going back to school to continue in my formal training, but for now I work as a cachier at a local
										hispanic fast food joint. 
									</p>

									<em className="text-center">My story is still developing...</em>

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
