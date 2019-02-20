import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import styled from "styled-components";
import ImageDetail from "./ImageDetail";

const Wrapper = styled.div`
  margin-top: 20px;
`;

class ImagePreview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: null,
      isOpen: false,
      images: []
    };
  }

  componentDidMount() {
    this.setState({
      images: this.props.images
    });
  }

  componentDidUpdate() {
    console.log("ImagePreview: ", this.state.isOpen);
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      this.state.images && (
        <Wrapper>
          <MDBContainer>
            <div className="mdb-lightbox no-margin">
              <MDBRow>
                {this.state.images.map((image, index) => (
                  <MDBCol md="4" key={index}>
                    <figure>
                      <img
                        src={image.fields.photo.fields.file.url}
                        alt={image.fields.title}
                        className="img-fluid"
                        onClick={() =>
                          this.setState({ photoIndex: index, isOpen: true })
                        }
                      />
                    </figure>
                  </MDBCol>
                ))}
              </MDBRow>
            </div>
            {isOpen && (
              <ImageDetail
                isOpen={this.state.isOpen}
                image={this.state.images[photoIndex]}
              />
            )}
          </MDBContainer>
        </Wrapper>
      )
    );
  }
}

export default ImagePreview;
