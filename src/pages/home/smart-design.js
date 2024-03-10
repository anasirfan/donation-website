import { LayoutTwo } from "../../components/Layout";
import ThreeScene from "../../components/ThreeJs/ThreeScene";

const SmartDesign = () => {
    return (
        <LayoutTwo aboutOverlay={false}>
            {/* hero slider */}
            {/* <HeroSliderSix sliderData={heroSliderData} /> */}
           
            <ThreeScene/>
            
        </LayoutTwo>
       
    ); 
};


export default SmartDesign;