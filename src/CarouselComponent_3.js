import React from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import itemsArray from './CarouselImages';



class MyCarousel_3 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            animating: false,
            activeIndex: 0,
            itemsIndex: 2,
        }
        this.handleNext = this.handleNext.bind(this);
        this.handlePrevious = this.handlePrevious.bind(this);
      
    }

    componentDidMount(){
        console.log(this.state.animating);
    }

    handleNext(){
        const { animating, activeIndex, itemsIndex } = this.state;
        console.log(animating);
        if (animating) return;
        const nextIndex = activeIndex === itemsArray[itemsIndex].length - 1 ? 0 : activeIndex + 1;
        this.setState({ activeIndex: nextIndex });

    }

    handlePrevious(){
        const { animating, activeIndex, itemsIndex } = this.state;
        if (animating) return;
        const nextIndex = activeIndex === 0 ? itemsArray[itemsIndex].length - 1 : activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    toggleAnimating(value){
        this.setState({animating: value });
    }


    render(){
        const { activeIndex, itemsIndex } = this.state;
        const slides = itemsArray[itemsIndex].map((item) => {
            return (

              <CarouselItem
                onExiting={() => this.toggleAnimating(true)}
                onExited={() => this.toggleAnimating(false)}
                key={item.src}
                
              >
                <img src={item.src} alt={item.altText} className="carouselImg"/>
                <CarouselCaption captionText={item.caption} captionHeader={item.header} />
              </CarouselItem>
             
            );
          });
        
          return (
            
              <div className="col-md-6">
                <Carousel
                  activeIndex={activeIndex}
                  next={this.handleNext}
                  previous={this.handlePrevious}
                >
                  <CarouselIndicators items={itemsArray[itemsIndex]} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                  {slides}
                  <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.handlePrevious} />
                  <CarouselControl direction="next" directionText="Next" onClickHandler={this.handleNext} />
                </Carousel>
              </div>
          
        );
      }
}

export default MyCarousel_3;