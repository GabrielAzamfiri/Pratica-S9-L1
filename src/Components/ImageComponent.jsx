import React from "react";

class ImageComponent extends React.Component {
  // render è un metodo OBBLIGATORIO quando usiamo un componente a Classe!
  // è grazie al render che possiamo avere il return di un elemento JSX
  render() {
   

    return (
      <img src={this.props.src} alt={this.props.alt} />
    );
  }
}

export default ImageComponent;