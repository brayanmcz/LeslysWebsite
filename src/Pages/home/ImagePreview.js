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
      modal14: true,
      images: []
    };
  }

  // toggle(nr) {
  //   console.log(nr);
  //      let modalNumber = "modal" + nr;

  //   this.setState({
  //     [modalNumber]: !this.state[modalNumber]
  // })
  // }

  toggle = nr => () => {
    let modalNumber = "modal" + nr;
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
                  <MDBCol md="4" key={index}>
                    <figure>
                      <img
                        src={image.fields.image[0].fields.file.url}
                        alt={image.fields.title}
                        className="img-fluid"
                        onClick={() =>
                          this.setState({ 
                            photoIndex: index, 
                            modal14: true 
                          })
                        }
                      />
                    </figure>
                  </MDBCol>
                ))}
              </MDBRow>
            </div>
             { 
              photoIndex !== null && 
              ( 
              <ImageDetail 
                image={this.state.images[photoIndex]}
                modal14={this.state.modal14}
                toggle={this.toggle}
                />
              )
             }
          </MDBContainer>
        </Wrapper>
      )
    );
  }
}

export default ImagePreview;
