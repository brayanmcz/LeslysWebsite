import React, { Component } from 'react';
import styled from 'styled-components';
import * as contentful from 'contentful';
import ImagePreview from './ImagePreview';

const Wrapper = styled.div``;

class ImageContainer extends Component {
	state = {
		images: []
	};

	client = contentful.createClient({
		space: 'hb1om2lkotsv',
		accessToken: 'da2bd61d2d838c62c182caea462729462e9eab26816baa57d0bfaafe92609e99'
	});

	componentDidMount() {
		this.client.getEntries({ 'sys.contentType.sys.id': 'imagePost' }).then((entries) => {
			// console.log(entries);
			this.setState({
				images: entries.items
			});
		});
	}

	render() {
		return (
			<Wrapper>
				{this.state.images.length === 0 ? <p>Loading...</p> : <ImagePreview images={this.state.images} />}
			</Wrapper>
		);
	}
}

export default ImageContainer;
