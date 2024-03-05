import { LayoutTwo } from "../../components/Layout";
import ThreeScene from "../../components/ThreeJs/ThreeScene";

const SmartDesign = () => {
    return (
        <LayoutTwo aboutOverlay={false}>
            {/* hero slider */}
            {/* <HeroSliderSix sliderData={heroSliderData} /> */}
            <div className="space-mb--r100"></div>
            <ThreeScene />
        </LayoutTwo>
       
    ); 
};


export default SmartDesign;