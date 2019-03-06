import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBView, MDBMask } from 'mdbreact';
import styled from 'styled-components';
import ImageDetail from './ImageDetail';

const Wrapper = styled.div`
	margin-top: 20px;

	.image-detail {
		cursor: pointer;
		-webkit-touch-callout: none; /* iOS Safari */
		-webkit-user-select: none; /* Safari */
		-khtml-user-select: none; /* Konqueror HTML */
		-moz-user-select: none; /* Firefox */
		-ms-user-select: none; /* Internet Explorer/Edge */
		user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */
	}
`;

class ImagePreview extends Component {
	constructor(props) {
		super(props);

		this.state = {
			photoIndex: null,
			modal14: true,
			images: []
		};
	}

	toggle = (nr) => () => {
		let modalNumber = 'modal' + nr;
		this.setState({
			[modalNumber]: !this.state[modalNumber]
		});
	};

	componentDidMount() {
		this.setState({
			images: this.props.images
		});
	}

	render() {
		const { photoIndex } = this.state;
		return (
			this.state.images && (
				<Wrapper>
					<MDBContainer>
						<div className="mdb-lightbox no-margin">
							<MDBRow>
								{this.state.images.map((image, index) => (
									<MDBCol md="6" lg="4" xl="3" key={index}>
										<MDBView
											className="image-detail"
											hover
											onClick={() =>
												this.setState({
													photoIndex: index,
													modal14: true
												})}
										>
												<img
													src={image.fields.image[0].fields.file.url}
													alt={image.fields.title}
													className="img-fluid"
												/>

											<MDBMask className="flex-center mask" overlay="cyan-slight">
												<p className="white-text">{image.fields.title}</p>
											</MDBMask>
										</MDBView>
									</MDBCol>
								))}
							</MDBRow>
						</div>
						{photoIndex !== null && (
							<ImageDetail
								className="image-detail"
								image={this.state.images[photoIndex]}
								modal14={this.state.modal14}
								toggle={this.toggle}
							/>
						)}
					</MDBContainer>
				</Wrapper>
			)
		);
	}
}

export default ImagePreview;
