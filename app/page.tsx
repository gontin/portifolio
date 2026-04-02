import PixelBlast from "@/components/PixelBlast";
export default function Home() {


  return (  
<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <div className="absolute inset-0 z-0">
    <PixelBlast
      variant="square"
      pixelSize={3}
      color="#77767b"
      patternScale={4.25}
      patternDensity={0.95}
      pixelSizeJitter={1}
      enableRipples
      rippleSpeed={0.4}
      rippleThickness={0.12}
      rippleIntensityScale={1.5}
      liquid={false}
      liquidStrength={0.12}
      liquidRadius={1.2}
      liquidWobbleSpeed={5}
      speed={1}
      edgeFade={0.25}
      transparent
    />
  </div>
  <div className="relative z-10">
    <h1>awawawawaw</h1>
  </div>

</div>
  );
}
