import React from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const initialState = {
  viewerIsOpen: false,
  currentImage: 0,
}

type IState = Readonly<typeof initialState>

export default class Art extends React.Component<{}, IState> {
  readonly state: IState = initialState;

  openLightbox = (event: any, { photo, index } : any) => {
    this.setState({
      currentImage: index,
      viewerIsOpen: true
    });
  }

  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      viewerIsOpen: false
    });
  }

  getPhotos () {
    // const art = [
    //   '3pukes.png',
    //   'catguardian.png',
    //   'fiicha.png',
    //   'hm.jpg',
    //   'kokix.png',
    //   'maz.bmp',
    //   'sirde.png',
    //   'tobefree.png',
    //   'udens_rob.png',
    //   'veln.png',
    //   'zive1.png',
    //   'zivs.png'
    // ];

    // const photos = art.map(name => {
    //   return {
    //     src: `${process.env.PUBLIC_URL}/art/photos/${name}`,
    //     width: 4,
    //     height: 3
    //   }
    // });

    // return photos;

    return [
      {src: "/art/photos/3pukes.png", width: 3, height: 4},
      {src: "/art/photos/catguardian.png", width: 5, height: 3},
      {src: "/art/photos/fiicha.png", width: 4, height: 3},
      {src: "/art/photos/hm.jpg", width: 5, height: 3},
      {src: "/art/photos/kokix.png", width: 4, height: 3},
      {src: "/art/photos/maz.bmp", width: 4, height: 3},
      {src: "/art/photos/sirde.png", width: 3, height: 5},
      {src: "/art/photos/tobefree.png", width: 4, height: 2},
      {src: "/art/photos/udens_rob.png", width: 4, height: 3},
      {src: "/art/photos/veln.png", width: 5, height: 3},
      {src: "/art/photos/zive1.png", width: 4, height: 3},
      {src: "/art/photos/zivs.png", width: 4, height: 3}
    ];
  }

  render () {
    const photos = this.getPhotos();

    return <div style={{ margin: "40px" }}>
      {/* {art.map(name => <img src={`${process.env.PUBLIC_URL}/art/preview/${name}`} alt="" />)} */}
      <Gallery photos={photos} onClick={this.openLightbox} />
      <ModalGateway>
        {this.state.viewerIsOpen ? (
          <Modal onClose={this.closeLightbox}>
            <Carousel
              currentIndex={this.state.currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: '',
                caption: '',
                source: x.src
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  }
}