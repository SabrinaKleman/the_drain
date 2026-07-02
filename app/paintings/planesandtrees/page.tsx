import PaintingDetail from "@/components/PaintingDetail";

export default function PlanesAndTrees() {
  return (
    <PaintingDetail
      sold={true}
      title="Cube Squared"
      year="2026"
      medium="Oil on canvas"
      dimensions='38" × 60"'
      image="/images/planesandtrees.jpeg"
      description={
        <p>This piece asks up front (rudely): Since when did cubism stop being about the cube? How many two dimensional planes does one canvas’s two dimensional plane really need? Is reality itself imposed on a dimensional plane we’re eternally tethered to, forever unable to control the more fundamental forces of the higher dimensional planes which impose their will on us without our consent? This piece takes everything that is funny about that idea and makes it look very cool to your eyes. 
        </p>
      }
      extraImages={[
    "/images/planesandtrees2.jpeg",
  ]}/>
  );
}
