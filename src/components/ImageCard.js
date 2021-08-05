import React from "react";

class ImageCard extends React.Component{
    constructor(props) {
        super(props);
        this.imageRef = React.createRef();

        this.state = {spans: 0};
    }

    componentDidMount(){
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height/ 10 );
        this.setState({ spans });
        // this.imageRef.current.addEventListner("load", this.setSpans);
    }

    // setSpans = () => {
    //     console.log(this.imageRef.current.clientHeight);
    // }

    render(){

        const {description , urls} = this.props.image;

        return(
            <div style = {{gridRowEnd: `span ${this.state.spans}` }}>
            <img ref={this.imageRef} src={urls.regular} alt={description} />
            </div>
        );
    }
}

export default ImageCard;