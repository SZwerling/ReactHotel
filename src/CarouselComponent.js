import React from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Button
} from 'reactstrap';

 
import itemsArray from './CarouselImages';



class MyCarousel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            animating: false,
            activeIndex: 0,
            itemsIndex: 0,
        }
        this.handleNext = this.handleNext.bind(this);
        this.handlePrevious = this.handlePrevious.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
    }

    componentDidMount(){
        console.log(this.state.animating);
    }
    goToIndex(newIndex){
        const { animating } = this.state;
        if (animating) return;
        this.setState({ activeIndex: newIndex });
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


    changeIndex(id){
      this.setState({itemsIndex: id});
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
            <div className='container'>
              <div className="row row-content">
                <div className="col-md-8 mx-auto">
                  <div className='buttons-container'>
                    <Button className="button-item" onClick={() => this.changeIndex(0)}>Rooms</Button>
                    <Button className="button-item" onClick={() => this.changeIndex(1)}>Amenities</Button>
                    <Button className="button-item" onClick={() => this.changeIndex(2)}>Nightlife</Button>
                  </div>
                
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
              </div>
            </div>
          );
        }
}

export default MyCarousel;